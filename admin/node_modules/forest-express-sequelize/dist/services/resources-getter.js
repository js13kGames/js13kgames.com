"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.sort");

require("core-js/modules/es.promise");

require("core-js/modules/es.string.trim");

var _lodash = _interopRequireDefault(require("lodash"));

var _bluebird = _interopRequireDefault(require("bluebird"));

var _forestExpress = require("forest-express");

var _operators = _interopRequireDefault(require("../utils/operators"));

var _compositeKeysManager = _interopRequireDefault(require("./composite-keys-manager"));

var _queryBuilder = _interopRequireDefault(require("./query-builder"));

var _searchBuilder = _interopRequireDefault(require("./search-builder"));

var _liveQueryChecker = _interopRequireDefault(require("./live-query-checker"));

var _errors = require("./errors");

var _filtersParser = _interopRequireDefault(require("./filters-parser"));

var _requestedFieldsExtractor = _interopRequireDefault(require("./requested-fields-extractor"));

function ResourcesGetter(model, options, params) {
  const schema = _forestExpress.Schemas.schemas[model.name];
  const queryBuilder = new _queryBuilder.default(model, options, params);
  let segmentScope;
  let segmentWhere;
  const OPERATORS = new _operators.default(options);

  const primaryKey = _lodash.default.keys(model.primaryKeys)[0];

  const filterParser = new _filtersParser.default(schema, params.timezone, options);
  let fieldNamesRequested;
  let searchBuilder;

  async function getFieldNamesRequested() {
    if (!params.fields || !params.fields[model.name]) {
      return null;
    } // NOTICE: Populate the necessary associations for filters


    const associations = params.filters ? await filterParser.getAssociations(params.filters) : [];

    if (params.sort && params.sort.includes('.')) {
      let associationFromSorting = params.sort.split('.')[0];

      if (associationFromSorting[0] === '-') {
        associationFromSorting = associationFromSorting.substring(1);
      }

      associations.push(associationFromSorting);
    }

    const requestedFields = (0, _requestedFieldsExtractor.default)(params.fields, model, _forestExpress.Schemas.schemas);
    return _lodash.default.union(associations, requestedFields);
  }

  function getSearchBuilder() {
    if (searchBuilder) {
      return searchBuilder;
    }

    searchBuilder = new _searchBuilder.default(model, options, params, fieldNamesRequested);
    return searchBuilder;
  }

  let hasSmartFieldSearch = false;

  async function handleFilterParams() {
    return filterParser.perform(params.filters);
  }

  async function getWhere() {
    const where = {};
    where[OPERATORS.AND] = [];

    if (params.search) {
      where[OPERATORS.AND].push(getSearchBuilder().perform());
    }

    if (params.filters) {
      where[OPERATORS.AND].push(await handleFilterParams());
    }

    if (segmentWhere) {
      where[OPERATORS.AND].push(segmentWhere);
    }

    if (params.segmentQuery) {
      const queryToFilterRecords = params.segmentQuery.trim();
      new _liveQueryChecker.default().perform(queryToFilterRecords); // WARNING: Choosing the first connection might generate issues if the model does not
      //          belongs to this database.

      try {
        const results = await options.connections[0].query(queryToFilterRecords, {
          type: options.sequelize.QueryTypes.SELECT
        });
        const recordIds = results.map(function (result) {
          return result[primaryKey] || result.id;
        });
        const condition = {
          [primaryKey]: {}
        };
        condition[primaryKey][OPERATORS.IN] = recordIds;
        where[OPERATORS.AND].push(condition);
        return where;
      } catch (error) {
        const errorMessage = `Invalid SQL query for this Live Query segment:\n${error.message}`;

        _forestExpress.logger.error(errorMessage);

        throw new _errors.ErrorHTTP422(errorMessage);
      }
    }

    return where;
  }

  async function getRecords() {
    fieldNamesRequested = fieldNamesRequested || (await getFieldNamesRequested());
    const scope = segmentScope ? model.scope(segmentScope) : model.unscoped();
    const include = queryBuilder.getIncludes(model, fieldNamesRequested);
    return getWhere().then(function (where) {
      const findAllOpts = {
        where,
        include,
        order: queryBuilder.getOrder(),
        offset: queryBuilder.getSkip(),
        limit: queryBuilder.getLimit()
      };

      if (params.search) {
        _lodash.default.each(schema.fields, function (field) {
          if (field.search) {
            try {
              field.search(findAllOpts, params.search);
              hasSmartFieldSearch = true;
            } catch (error) {
              _forestExpress.logger.error(`Cannot search properly on Smart Field ${field.field}`, error);
            }
          }
        });

        const fieldsSearched = getSearchBuilder().getFieldsSearched();

        if (fieldsSearched.length === 0 && !hasSmartFieldSearch) {
          if (!params.searchExtended || !getSearchBuilder().hasExtendedSearchConditions()) {
            // NOTICE: No search condition has been set for the current search, no record can be
            //         found.
            return [];
          }
        }
      }

      return scope.findAll(findAllOpts);
    });
  }

  async function countRecords() {
    fieldNamesRequested = fieldNamesRequested || (await getFieldNamesRequested());
    const scope = segmentScope ? model.scope(segmentScope) : model.unscoped();
    const include = queryBuilder.getIncludes(model, fieldNamesRequested);
    return getWhere().then(function (where) {
      const countOptions = {
        include,
        where
      };

      if (!primaryKey) {
        // NOTICE: If no primary key is found, use * as a fallback for Sequelize.
        countOptions.col = '*';
      }

      if (params.search) {
        _lodash.default.each(schema.fields, function (field) {
          if (field.search) {
            try {
              field.search(countOptions, params.search);
              hasSmartFieldSearch = true;
            } catch (error) {
              _forestExpress.logger.error(`Cannot search properly on Smart Field ${field.field}`, error);
            }
          }
        });

        const fieldsSearched = getSearchBuilder().getFieldsSearched();

        if (fieldsSearched.length === 0 && !hasSmartFieldSearch) {
          if (!params.searchExtended || !getSearchBuilder().hasExtendedSearchConditions()) {
            // NOTICE: No search condition has been set for the current search, no record can be
            //         found.
            return 0;
          }
        }
      }

      return scope.count(countOptions);
    });
  }

  function getSegment() {
    if (schema.segments && params.segment) {
      const segment = _lodash.default.find(schema.segments, function (schemaSegment) {
        return schemaSegment.name === params.segment;
      });

      segmentScope = segment.scope;
      segmentWhere = segment.where;
    }
  }

  async function getSegmentCondition() {
    getSegment();

    if (_lodash.default.isFunction(segmentWhere)) {
      return segmentWhere(params).then(function (where) {
        segmentWhere = where;
      });
    }

    return _bluebird.default.resolve();
  }

  this.perform = async function () {
    return getSegmentCondition().then(getRecords).then(function (records) {
      let fieldsSearched = null;

      if (params.search) {
        fieldsSearched = getSearchBuilder().getFieldsSearched();
      }

      if (schema.isCompositePrimary) {
        records.forEach(function (record) {
          record.forestCompositePrimary = new _compositeKeysManager.default(model, schema, record).createCompositePrimary();
        });
      }

      return [records, fieldsSearched];
    });
  };

  this.count = async function () {
    return getSegmentCondition().then(countRecords);
  };
}

module.exports = ResourcesGetter;