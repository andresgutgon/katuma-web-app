'use strict';

var Base = {}
  , Backbone = require('backbone')
  , env = require('env');

Base = Backbone.Model.extend({

  /**
   * Returns project name
   *
   * @return {String}
   */
  publicName: function () {
    return this.get('name');
  }

  /**
   * Returns attribute plus one
   *
   * @return {Integer}
   */
, increment: function (attr) {
    this.set(attr, this.get(attr) + 1);
  }

  /**
   * Returns API end point
   *
   * @param {String} resource
   * @return {String}
   */
, getApiEndPoint: function (resource) {
    var api_url = env.api_base;

    api_url += resource;

    if (this.isNew()) {
      return api_url;
    } else {
      return api_url + '/' + this.id;
    }
  }
});

module.exports = Base;
