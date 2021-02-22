"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es.array.iterator");

var _lodash = _interopRequireDefault(require("lodash"));

var _operators = _interopRequireDefault(require("../utils/operators"));

function CompositeKeysManager(model, schema, record) {
  const GLUE = '|';

  this.getPrimaryKeyValues = function getPrimaryKeyValues(recordId) {
    const primaryKeyValues = recordId.split(GLUE); // NOTICE: Prevent liana to crash when a composite primary keys is null,
    //         this behaviour should be avoid instead of fixed.

    primaryKeyValues.forEach(function (key, index) {
      if (key === 'null') {
        primaryKeyValues[index] = null;
      }
    });
    return primaryKeyValues;
  };

  this.getRecordsConditions = function getRecordsConditions(recordsIds, options) {
    var _this = this;

    const {
      OR
    } = new _operators.default(options);
    return {
      [OR]: recordsIds.map(function (recordId) {
        return _this.getRecordConditions(recordId);
      })
    };
  };

  this.getRecordConditions = function getRecordConditions(recordId) {
    const where = {};
    const primaryKeyValues = this.getPrimaryKeyValues(recordId);

    if (primaryKeyValues.length === _lodash.default.keys(model.primaryKeys).length) {
      _lodash.default.keys(model.primaryKeys).forEach(function (primaryKey, index) {
        where[primaryKey] = primaryKeyValues[index];
      });
    }

    return where;
  };

  this.createCompositePrimary = function createCompositePrimary() {
    let compositePrimary = '';

    _lodash.default.keys(model.primaryKeys).forEach(function (primaryKey, index) {
      // NOTICE: Prevent liana to crash when a composite primary keys is null,
      //         this behaviour should be avoid instead of fixed.
      if (record[primaryKey] === null) {
        record[primaryKey] = 'null';
      }

      if (index === 0) {
        compositePrimary = record[primaryKey];
      } else {
        compositePrimary = compositePrimary + GLUE + record[primaryKey];
      }
    });

    return compositePrimary;
  };
}

module.exports = CompositeKeysManager;