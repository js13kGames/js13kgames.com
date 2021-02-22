"use strict";

require("core-js/modules/es.string.replace");

const _ = require('lodash');

function decorateForSearch(records, fields, searchValue) {
  let matchFields = {};
  records.forEach(function (record, index) {
    fields.forEach(function (fieldName) {
      const value = record[fieldName];

      if (value) {
        const searchEscaped = searchValue.replace(/[-[\]{}()*+!<=:?./\\^$|#\s,]/g, '\\$&');
        const searchHighlight = new RegExp(searchEscaped, 'i');
        const match = value.toString().match(searchHighlight);

        if (match) {
          if (!matchFields[index]) {
            matchFields[index] = {
              id: record.id,
              search: []
            };
          }

          matchFields[index].search.push(fieldName);
        }
      }
    });
  });

  if (_.isEmpty(matchFields)) {
    matchFields = null;
  }

  return matchFields;
}

exports.decorateForSearch = decorateForSearch;