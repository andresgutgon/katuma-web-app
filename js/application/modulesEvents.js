define(function (require) {
	"use strict";
	
	//dependencies
	require("marionette");
	var PrivateRouter = require("application/PrivateRouter");
	var PublicRouter = require("application/PublicRouter");
	
	var modulesEvents = function(KatumaApp){

		KatumaApp.publicModule.on("start", function(){
			var self =  this;
			KatumaApp.publicModule.router = new PublicRouter(this, KatumaApp);

	        require(["Modules/Public/Views/publicLayout"], function (PublicLayout) {
	            KatumaApp.privateModule.stop();	            
	            
	            self.layout = new PublicLayout({
	            	url: self.url
	            });
	            KatumaApp.mainRegion.show(self.layout);

	            //layout events
	            self.layout.on("signIn", function(userModel){
	            	//TODO: pass the user model and save in the app
	            	//KatumaApp.userModel = userModel;

	            	KatumaApp.publicModule.stop();
					KatumaApp.privateModule.start();
					//call to the router to set the url and custom initialization
					KatumaApp.privateModule.router.navigate("user", {trigger: true});
	            });
	        });
	    });

	    KatumaApp.privateModule.on("start", function(){
	    	var userModel = KatumaApp.userModel;
			var self = this;

			//start router
			KatumaApp.privateModule.router = new PrivateRouter(this, KatumaApp);

			require(["Modules/Private/Views/privateLayout"], function (PrivateLayout) {
				self.layout = new PrivateLayout({
					user: userModel,
					url: self.url,
				});
				KatumaApp.mainRegion.show(self.layout);

				self.layout.on("logout", function(){
					KatumaApp.userModel = null;
					
					KatumaApp.privateModule.stop();
					KatumaApp.publicModule.start();
					//call to the router to set the url and custom initialization
					KatumaApp.publicModule.router.navigate("",{trigger: true});
	            });
			});
	    });

	    //public module initializer
		KatumaApp.module("publicModule", function(publicModule, KatumaApp){
            KatumaApp.publicModule.start();
	        Backbone.history.start();
	    });
	};

    return modulesEvents;
});