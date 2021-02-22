"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.promise");

var _lodash = _interopRequireDefault(require("lodash"));

var _forestExpress = require("forest-express");

var _operators = _interopRequireDefault(require("../utils/operators"));

var _filtersParser = _interopRequireDefault(require("./filters-parser"));

var _orm = _interopRequireDefault(require("../utils/orm"));

function ValueStatGetter(model, params, options) {
  var _this = this;

  const OPERATORS = new _operators.default(options);
  this.operatorDateParser = new _forestExpress.BaseOperatorDateParser({
    operators: OPERATORS,
    timezone: params.timezone
  });
  const schema = _forestExpress.Schemas.schemas[model.name];

  function getAggregate() {
    return params.aggregate.toLowerCase();
  }

  function getAggregateField() {
    // NOTICE: As MySQL cannot support COUNT(table_name.*) syntax, fieldName cannot be '*'.
    const fieldName = params.aggregate_field || schema.primaryKeys[0] || schema.fields[0].field;
    return `${schema.name}.${_orm.default.getColumnName(schema, fieldName)}`;
  }

  function getIncludes() {
    const includes = [];

    _lodash.default.values(model.associations).forEach(function (association) {
      if (['HasOne', 'BelongsTo'].indexOf(association.associationType) > -1) {
        includes.push({
          model: association.target.unscoped(),
          as: association.associationAccessor,
          attributes: []
        });
      }
    });

    return includes;
  }

  this.perform = async function () {
    let countCurrent;
    const aggregateField = getAggregateField();
    const aggregate = getAggregate();
    let where;
    let rawPreviousInterval;

    if (params.filters) {
      const conditionsParser = new _filtersParser.default(schema, params.timezone, options);
      where = await conditionsParser.perform(params.filters);
      rawPreviousInterval = conditionsParser.getPreviousIntervalCondition(params.filters);
    }

    return model.unscoped().aggregate(aggregateField, aggregate, {
      include: getIncludes(),
      where
    }).then(function (count) {
      countCurrent = count || 0;

      if (rawPreviousInterval) {
        const formatedPreviousDateInterval = _this.operatorDateParser.getPreviousDateFilter(rawPreviousInterval.operator, rawPreviousInterval.value);

        if (where[OPERATORS.AND]) {
          where[OPERATORS.AND].forEach(function (condition) {
            if (condition[rawPreviousInterval.field]) {
              // NOTICE: Might not work on super edgy cases (when the 'rawPreviousInterval.field'
              //        appears twice ont the filters)
              condition[rawPreviousInterval.field] = formatedPreviousDateInterval;
            }
          });
        } else {
          where[rawPreviousInterval.field] = formatedPreviousDateInterval;
        }

        return model.unscoped().aggregate(aggregateField, aggregate, {
          include: getIncludes(),
          where
        }).then(function (resultCount) {
          return resultCount || 0;
        });
      }

      return undefined;
    }).then(function (countPrevious) {
      return {
        value: {
          countCurrent,
          countPrevious
        }
      };
    });
  };
}

module.exports = ValueStatGetter;