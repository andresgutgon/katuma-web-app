"use strict";

/*
** publicLayout for user that are not register in the app. 
 */
define(function (require) {
	//dependecies
	require("marionette");
	require("templates");
	require("bootstrap");

	//module
	var TopbarView = Backbone.Marionette.ItemView.extend({
        template: Handlebars.templates.publicTopbarView,
        id:"topbarView"
    });

    var ContentView = Backbone.Marionette.ItemView.extend({
        template: Handlebars.templates.publicContentView,
        id:"contentView"
    });

	var PublicLayout = Backbone.Marionette.Layout.extend({
	    template: Handlebars.templates.publicLayout,
	    id:"publicLayout",
	    regions: {
	        topbarRegion: "#topbarRegion",
	        contentRegion: "#contentRegion"
	    },
	    onShow: function(){
			var topbarView = new TopbarView();
			var contentView = new ContentView();
			
			this.topbarRegion.show(topbarView);
			this.contentRegion.show(contentView);

			//TODO:we have to load the i18next and the LandingPage before the templates rendering, because this file are not prepare to be AMD. The file LandingPage has to be refactor and apply the logic of the translation and the email to the public controller. Untis this will be done this is the solution.
			require(["libs/i18next-1.7.2.min", "libs/LandingPage"], function () {});
	    },
	    events:{
			"click .signIn": function (event) {
				event.preventDefault();
				this.trigger("signIn");
			}
		}
	});

	return PublicLayout;
});