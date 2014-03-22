"use strict";

define(function (require) {
	//dependencies
	require("marionette");
	
	var modulesEvents = function(KatumaApp){

		KatumaApp.publicModule.on("start", function(){
	        require(["controllers/publicController"], function (PublicController) {
	            KatumaApp.privateModule.stop();
	            var controller = new PublicController();
	            var layout = controller.getLayout();

	            controller.on("signIn", function(userModel){
	                KatumaApp.publicModule.trigger("signIn", userModel);
	            });

	            controller.on("login", function(session){
	                KatumaApp.publicModule.trigger("login", session);
	            });

	            KatumaApp.mainRegion.show(layout);
	        });
	    });

	    KatumaApp.privateModule.on("start", function(userModel){
	        require(["controllers/privateController"], function (PrivateController) {
				KatumaApp.publicModule.stop();
	            var controller = new PrivateController({user:userModel});

	            var layout = controller.getLayout();

	            if (layout) {
					KatumaApp.mainRegion.show(layout);
	            }
	            else{
					KatumaApp.privateModule.trigger("logout");
	            }
	        });
	    });
	};

    return modulesEvents;
});