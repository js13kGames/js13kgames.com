"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es.array.iterator");

var _orm = _interopRequireDefault(require("./orm"));

exports.getReferenceSchema = function (schemas, modelSchema, associationName) {
  const schemaField = modelSchema.fields.find(function (field) {
    return field.field === associationName;
  }); // NOTICE: No reference field found, no name transformation tried.

  if (!schemaField || !schemaField.reference) {
    return null;
  }

  const [tableName] = schemaField.reference.split('.');
  return schemas[tableName];
};

exports.getReferenceField = function (schemas, modelSchema, associationName, fieldName) {
  function getDefaultValue() {
    return `${associationName}.${fieldName}`;
  }

  const associationSchema = exports.getReferenceSchema(schemas, modelSchema, associationName, fieldName); // NOTICE: No association schema found, no name transformation tried.

  if (!associationSchema) {
    return getDefaultValue();
  }

  const belongsToColumnName = _orm.default.getColumnName(associationSchema, fieldName);

  return `${associationName}.${belongsToColumnName}`;
};