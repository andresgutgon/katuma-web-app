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
        template: Handlebars.templates.privateTopbarView,
        id:"topbarView"
    });

    var ContentView = Backbone.Marionette.ItemView.extend({
        template: Handlebars.templates.privateContentView,
        id:"contentView",
        initialize:function(options){
        	this.template = this.template(options.user.attributes);
        }
    });

	var PrivateLayout = Backbone.Marionette.Layout.extend({
	    template: Handlebars.templates.publicLayout,
	    id:"privateLayout",
	    regions: {
	        topbarRegion: "#topbarRegion",
	        contentRegion: "#contentRegion"
	    },
	    initialize:function(options){
		},
	    onShow: function(){
			var topbarView = new TopbarView();
			var contentView = new ContentView({user:this.options.user});
			
			console.log(this.options);
			this.topbarRegion.show(topbarView);
			this.contentRegion.show(contentView);
	    }
	});

	return PrivateLayout;
});