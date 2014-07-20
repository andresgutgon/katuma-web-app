"use strict";

var BaseModel = require('./base')
  , User;

User = BaseModel.extend({
  /**
   * Get the API url
   *
   * @return {String}
   */
  url: function () {
    return this.getApiEndPoint('users');
  }
});

module.exports = User;
