"use strict";

const semver = require('semver');

const REGEX_VERSION = /(\d+\.)?(\d+\.)?(\*|\d+)/;

const getVersion = function (sequelize) {
  const version = sequelize.version.match(REGEX_VERSION);

  if (version && version[0]) {
    return version[0];
  }

  return null;
};

const isVersionLessThan4 = function (sequelize) {
  try {
    return semver.lt(getVersion(sequelize), '4.0.0');
  } catch (error) {
    return true;
  }
};

const findRecord = function (model, recordId, options) {
  if (model.findByPk) {
    return model.findByPk(recordId, options);
  }

  return model.findById(recordId, options);
};

const getColumnName = function (schema, fieldName) {
  const schemaField = schema.fields.find(function (field) {
    return field.field === fieldName;
  });
  return schemaField && schemaField.columnName ? schemaField.columnName : fieldName;
};

const isUUID = function (DataTypes, fieldType) {
  return fieldType instanceof DataTypes.UUID || fieldType instanceof DataTypes.UUIDV1 || fieldType instanceof DataTypes.UUIDV4;
};

exports.getVersion = getVersion;
exports.isVersionLessThan4 = isVersionLessThan4;
exports.findRecord = findRecord;
exports.getColumnName = getColumnName;
exports.isUUID = isUUID;