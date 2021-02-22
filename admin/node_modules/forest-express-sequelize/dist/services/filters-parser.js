"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.promise");

var _forestExpress = require("forest-express");

var _operators = _interopRequireDefault(require("../utils/operators"));

var _errors = require("./errors");

const {
  getReferenceSchema,
  getReferenceField
} = require('../utils/query');

function FiltersParser(modelSchema, timezone, options) {
  var _this = this;

  this.OPERATORS = new _operators.default(options);
  this.operatorDateParser = new _forestExpress.BaseOperatorDateParser({
    operators: this.OPERATORS,
    timezone
  });

  this.perform = async function (filtersString) {
    return _forestExpress.BaseFiltersParser.perform(filtersString, _this.formatAggregation, _this.formatCondition);
  };

  this.formatAggregation = async function (aggregator, formatedConditions) {
    const aggregatorOperator = _this.formatAggregatorOperator(aggregator);

    return {
      [aggregatorOperator]: formatedConditions
    };
  };

  this.formatCondition = async function (condition) {
    const formatedField = _this.formatField(condition.field);

    if (_this.operatorDateParser.isDateOperator(condition.operator)) {
      return {
        [formatedField]: _this.operatorDateParser.getDateFilter(condition.operator, condition.value)
      };
    }

    const isTextField = _this.isTextField(condition.field);

    return {
      [formatedField]: _this.formatOperatorValue(condition.operator, condition.value, isTextField)
    };
  };

  this.formatAggregatorOperator = function (aggregatorOperator) {
    switch (aggregatorOperator) {
      case 'and':
        return _this.OPERATORS.AND;

      case 'or':
        return _this.OPERATORS.OR;

      default:
        throw new _errors.NoMatchingOperatorError();
    }
  };

  this.formatOperator = function (operator) {
    switch (operator) {
      case 'not':
        return _this.OPERATORS.NOT;

      case 'greater_than':
      case 'after':
        return _this.OPERATORS.GT;

      case 'less_than':
      case 'before':
        return _this.OPERATORS.LT;

      case 'contains':
      case 'starts_with':
      case 'ends_with':
        return _this.OPERATORS.LIKE;

      case 'not_contains':
        return _this.OPERATORS.NOT_LIKE;

      case 'present':
      case 'not_equal':
        return _this.OPERATORS.NE;

      case 'blank':
      case 'equal':
        return _this.OPERATORS.EQ;

      default:
        throw new _errors.NoMatchingOperatorError();
    }
  };

  this.formatValue = function (operator, value) {
    switch (operator) {
      case 'not':
      case 'greater_than':
      case 'less_than':
      case 'not_equal':
      case 'equal':
      case 'before':
      case 'after':
        return value;

      case 'contains':
      case 'not_contains':
        return `%${value}%`;

      case 'starts_with':
        return `${value}%`;

      case 'ends_with':
        return `%${value}`;

      case 'present':
      case 'blank':
        return null;

      default:
        throw new _errors.NoMatchingOperatorError();
    }
  };

  this.formatOperatorValue = function (operator, value, isTextField = false) {
    switch (operator) {
      case 'not':
        return {
          [_this.OPERATORS.NOT]: value
        };

      case 'greater_than':
      case 'after':
        return {
          [_this.OPERATORS.GT]: value
        };

      case 'less_than':
      case 'before':
        return {
          [_this.OPERATORS.LT]: value
        };

      case 'contains':
        return {
          [_this.OPERATORS.LIKE]: `%${value}%`
        };

      case 'starts_with':
        return {
          [_this.OPERATORS.LIKE]: `${value}%`
        };

      case 'ends_with':
        return {
          [_this.OPERATORS.LIKE]: `%${value}`
        };

      case 'not_contains':
        return {
          [_this.OPERATORS.NOT_LIKE]: `%${value}%`
        };

      case 'present':
        return {
          [_this.OPERATORS.NE]: null
        };

      case 'not_equal':
        return {
          [_this.OPERATORS.NE]: value
        };

      case 'blank':
        return isTextField ? {
          [_this.OPERATORS.OR]: [{
            [_this.OPERATORS.EQ]: null
          }, {
            [_this.OPERATORS.EQ]: ''
          }]
        } : {
          [_this.OPERATORS.EQ]: null
        };

      case 'equal':
        return {
          [_this.OPERATORS.EQ]: value
        };

      default:
        throw new _errors.NoMatchingOperatorError();
    }
  };

  this.formatField = function (field) {
    if (field.includes(':')) {
      const [associationName, fieldName] = field.split(':');
      return `$${getReferenceField(_forestExpress.Schemas.schemas, modelSchema, associationName, fieldName)}$`;
    }

    return field;
  };

  this.isTextField = function (field) {
    if (field.includes(':')) {
      const [associationName, fieldName] = field.split(':');
      const associationSchema = getReferenceSchema(_forestExpress.Schemas.schemas, modelSchema, associationName, fieldName);

      if (associationSchema) {
        return _this.getFieldTypeFromSchema(associationSchema, field) === 'String';
      }

      return false;
    }

    return _this.getFieldTypeFromSchema(modelSchema, field) === 'String';
  };

  this.getFieldTypeFromSchema = function (schema, fieldName) {
    const fieldFound = schema.fields.find(function (field) {
      return field.field === fieldName;
    });
    return fieldFound && fieldFound.type;
  }; // NOTICE: Look for a previous interval condition matching the following:
  //         - If the filter is a simple condition at the root the check is done right away.
  //         - There can't be a previous interval condition if the aggregator is 'or' (no meaning).
  //         - The condition's operator has to be elligible for a previous interval.
  //         - There can't be two previous interval condition.


  this.getPreviousIntervalCondition = function (filtersString) {
    const filters = _forestExpress.BaseFiltersParser.parseFiltersString(filtersString);

    let currentPreviousInterval = null; // NOTICE: Leaf condition at root

    if (filters && !filters.aggregator) {
      if (_this.operatorDateParser.hasPreviousDateInterval(filters.operator)) {
        return filters;
      }

      return null;
    } // NOTICE: No previous interval condition when 'or' aggregator


    if (filters.aggregator === 'and') {
      for (let i = 0; i < filters.conditions.length; i += 1) {
        const condition = filters.conditions[i]; // NOTICE: Nested filters

        if (condition.aggregator) {
          return null;
        }

        if (_this.operatorDateParser.hasPreviousDateInterval(condition.operator)) {
          // NOTICE: There can't be two previousInterval.
          if (currentPreviousInterval) {
            return null;
          }

          currentPreviousInterval = condition;
        }
      }
    }

    return currentPreviousInterval;
  };

  this.getAssociations = async function (filtersString) {
    return _forestExpress.BaseFiltersParser.getAssociations(filtersString);
  };
}

module.exports = FiltersParser;