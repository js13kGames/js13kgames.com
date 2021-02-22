"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.promise");

var _lodash = _interopRequireDefault(require("lodash"));

var _bluebird = _interopRequireDefault(require("bluebird"));

var _moment = _interopRequireDefault(require("moment"));

var _forestExpress = require("forest-express");

var _orm = _interopRequireWildcard(require("../utils/orm"));

var _database = require("../utils/database");

var _filtersParser = _interopRequireDefault(require("./filters-parser"));

// NOTICE: These aliases are not camelcased to prevent issues with Sequelize.
const ALIAS_GROUP_BY = 'forest_alias_groupby';
const ALIAS_AGGREGATE = 'forest_alias_aggregate';

function PieStatGetter(model, params, options) {
  const needsDateOnlyFormating = (0, _orm.isVersionLessThan4)(options.sequelize);
  const schema = _forestExpress.Schemas.schemas[model.name];
  let associationSplit;
  let associationCollection;
  let associationField;
  let associationSchema;
  let field;

  if (params.group_by_field.indexOf(':') === -1) {
    field = _lodash.default.find(schema.fields, function (currentField) {
      return currentField.field === params.group_by_field;
    });
  } else {
    associationSplit = params.group_by_field.split(':');
    associationCollection = model.associations[associationSplit[0]].target.name;
    [, associationField] = associationSplit;
    associationSchema = _forestExpress.Schemas.schemas[associationCollection];
    field = _lodash.default.find(associationSchema.fields, function (currentField) {
      return currentField.field === associationField;
    });
  }

  function getGroupByField() {
    if (params.group_by_field.includes(':')) {
      const [associationName, fieldName] = params.group_by_field.split(':');
      return `${associationName}.${_orm.default.getColumnName(associationSchema, fieldName)}`;
    }

    return `${schema.name}.${_orm.default.getColumnName(schema, params.group_by_field)}`;
  }

  const groupByField = getGroupByField();

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

  function getGroupBy() {
    return (0, _database.isMSSQL)(options) ? [options.sequelize.col(groupByField)] : [ALIAS_GROUP_BY];
  }

  function formatResults(records) {
    return _bluebird.default.map(records, function (record) {
      let key;

      if (field.type === 'Date') {
        key = (0, _moment.default)(record[ALIAS_GROUP_BY]).format('DD/MM/YYYY HH:mm:ss');
      } else if (field.type === 'Dateonly' && needsDateOnlyFormating) {
        const offsetServer = (0, _moment.default)().utcOffset() / 60;

        const dateonly = _moment.default.utc(record[ALIAS_GROUP_BY]).add(offsetServer, 'h');

        key = dateonly.format('DD/MM/YYYY');
      } else {
        key = String(record[ALIAS_GROUP_BY]);
      }

      return {
        key,
        value: record[ALIAS_AGGREGATE]
      };
    });
  }

  this.perform = async function () {
    const where = await new _filtersParser.default(schema, params.timezone, options).perform(params.filters);
    return model.unscoped().findAll({
      attributes: [[options.sequelize.col(groupByField), ALIAS_GROUP_BY], [options.sequelize.fn(getAggregate(), options.sequelize.col(getAggregateField())), ALIAS_AGGREGATE]],
      include: getIncludes(),
      where,
      group: getGroupBy(),
      order: [[options.sequelize.literal(ALIAS_AGGREGATE), 'DESC']],
      raw: true
    }).then(formatResults).then(function (records) {
      return {
        value: records
      };
    });
  };
}

module.exports = PieStatGetter;