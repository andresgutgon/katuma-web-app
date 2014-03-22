"use strict";

define(function (require) {
    // dependencies
    require("marionette");
    var KatumaApp = require("application/KatumaApp");

    //module
    var Router = Backbone.Marionette.AppRouter.extend({
        initialize: function(){
            var self = this;

            KatumaApp.publicModule.on("signIn",function(userModel){
                self.userModel = userModel;
                self.navigate("user", userModel);
            });

            KatumaApp.publicModule.on("login",function(session){
                self.session = session;
                self.navigate("user", session);
            });
            
            KatumaApp.privateModule.on("logout",function(){
                self.navigate("public");
            });
        },

        routes:{
            //private routes
            "user":"user",
            "user/*path":"user",

            //public routes
            "*public": "public",
        },

        public : function(url){
            if (url) {
                console.warn("Url '"+url+"' doesnt exist");
            }
            else{
                (url) ? url : url = "/";
                console.log("Url '"+url+"' exist");
            }
            
            KatumaApp.publicModule.start();
        },

        user: function(url, event, a){
            (url) ? url : url = "";
            
            console.log("Url 'user/"+url+"' exist");

            KatumaApp.privateModule.start(this.userModel);
        },
    });

    return Router;
});