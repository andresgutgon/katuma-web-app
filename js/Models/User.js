"use strict";
var ServerManagment = require("Modules/Commons/ServerManagment")
  , user;

user = Backbone.Model.extend({
  resource: 'users'
, defaults: {
    id: null
  , created_at: null
  , email: null
  , name: null
  , updated_at: null
  }
, initialize: function () {
    this.url = ServerManagment.url + 'users/' + this.get('id');
  }
});

module.exports = user;
