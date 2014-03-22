"use strict";

define(function (require) {
	//dependencies
	require("marionette");
	var PrivateLayout = require("views/layouts/privateLayout");

	//module
	var PrivateController = Backbone.Marionette.Controller.extend({
		initialize: function(options){
			if (options.user) {
				this.layout = new PrivateLayout({user:options.user});
			}
		},
		getLayout: function(){
			return this.layout;
		}
	});

	

	return PrivateController;
});