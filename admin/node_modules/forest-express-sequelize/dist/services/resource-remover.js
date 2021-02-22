"use strict";

const ResourceFinder = require('./resource-finder');

function ResourceRemover(model, params) {
  this.perform = function () {
    return new ResourceFinder(model, params).perform().then(function (record) {
      if (record) {
        return record.destroy();
      }

      return null;
    });
  };
}

module.exports = ResourceRemover;