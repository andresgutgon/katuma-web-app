"use strict";

var UsersCollection
  , UserModel = require('../models/user')
  , BaseCollection = require('./base');

UsersCollection = BaseCollection.extend({
  model: UserModel

  /**
   * API url
   */
, url: function () {
    return this.getApiEndPoint('users.json?count=0');
  }

  /**
   * Returns a reference to the current user model
   * @return {User}
   */
  // Users.getCurrentUser = function () {
  //   return this.get(Teambox.Data.account.id);
  // };
});

module.exports = UsersCollection;
