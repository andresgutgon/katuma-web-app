"use strict";

var BaseCollection
  , Backbone = require('backbone')
  , env = require('env');

BaseCollection = Backbone.Collection.extend({
  /**
   * Does the annoying url swapping for fetching
   */
  fetchWithUrl: function (url_options, options) {
    var old_url = this.url;
    this.url = this.constructor.prototype.url(url_options);
    this.fetch(options);
    this.url = old_url;
  }
  /**
   * Returns API end point
   *
   * @param {String} resource
   * @return {String}
   */
, getApiEndPoint: function (resource) {
    return env.api_base + resource;
  }
});

module.exports = BaseCollection;
