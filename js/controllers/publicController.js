"use strict";

define(function (require) {
	//dependencies
	require("marionette");
	var PublicLayout = require("views/layouts/publicLayout");
	var User = require("models/User");

	//module
	var PublicController = Backbone.Marionette.Controller.extend({
		initialize: function(){
			var self = this;

			this.layout = new PublicLayout();

			//layout events
			this.layout.on("signIn", function(event){
				self.signIn(event);
			});

			this.layout.on("registerUser", function(event){
				self.registerUser(event);
			});
		},
		getLayout: function(){
			return this.layout;
		},
		signIn: function(event){
			var self = this;
			var form = $(event.target).parent();
			var data = {
				"email": form.find("[type=email]").val(),
				"password": form.find("[type=password]").val()
			};
			
			var Session = Backbone.Model.extend({
				url:"http://localhost:3000/api/v1/session",
			});

			var session = new Session(data);

			session.save(null,{
				error: function(session, error, request){
					if(error.responseJSON){
		                var errors = error.responseJSON.errors;
		                $.each(errors, function(index, value){
		                    console.log("ERROR "+(index+1)+": " + value);
		                });
		            }

		            session.destroy();
				},
				success: function(session, attributes, request){
					self.trigger("login", session);
				}
			});
		},
		registerUser: function(event){
			var self = this;
			var form = $(event.target).parent();
			var data = {
		        "email": form.find("#email").val(),
		        "name": form.find("#name").val(),
		        "password": form.find("#password").val(),
		        "password_confirmation": form.find("#repeatPassword").val()
		    };

		    var user = new User(data);

		    user.save(null,{
		        error: function(user, error, request){
		            if(error.responseJSON){
		                var errors = error.responseJSON.errors;
		                $.each(errors, function(index, value){
		                    console.log("ERROR "+(index+1)+": " + value);
		                });
		            }

		            user.destroy();
				},
				success: function(user, attributes, request){
					self.trigger("signIn", user);
				}
			});
		}
	});

	return PublicController;
});