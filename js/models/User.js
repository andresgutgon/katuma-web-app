"use strict";

define(function (require) {
	// dependencies
    require("marionette");

	var User = Backbone.Model.extend({
        url:"http://localhost:3000/api/v1/users",
    });
	
	return User;
});