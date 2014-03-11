"use strict";

require.config({
    urlArgs: "nocache=" + (new Date()).getTime(), // In order to expire
    baseUrl: "js",
    paths : {
        backbone : "libs/backbone",
        underscore : "libs/underscore",
        jquery : "libs/jquery-1.10.1",
        marionette : "libs/backbone.marionette.min",
        handlebars: "libs/handlebars-v1.1.2",
        templates: "templates",
        "backbone.wreqr" : "libs/backbone.wreqr",
        "backbone.eventbinder" : "libs/backbone.eventbinder",
        "backbone.babysitter" : "libs/backbone.babysitter",
        bootstrap:"libs/bootstrap.min"
    },
    shim : {
        jquery : {
            exports : "jQuery",
        },
        underscore : {
            exports : "_"
        },
        backbone : {
            deps : ["jquery", "underscore"],
            exports : "Backbone",
        },
        marionette:{
            deps:["backbone"]
        },
        handlebars: {
            exports : "Handlebars",
        },
        templates: {
            deps: ["handlebars"]
        },
        bootstrap:{
            deps:["jquery"]
        }
    }
});

define(function (require) {
    // dependencies
    require("marionette");
    var AppRouter = require("application/router");

    new AppRouter();
    Backbone.history.start();

    
    // LOGIN
    var User = Backbone.Model.extend({
        url:"http://localhost:3000/api/v1/users",
    });

    var user = new User({
        "email": "ofasdfstnaa@gmail.com",
        "name": "ndddrico ddstano",
        "password": "secret",
        "password_confirmation": "secret"
    });

    //user.save();
 
    $.ajax({
        url: "http://localhost:3000/api/v1/users",
        type: 'POST',
        dataType: 'json',
        data: user.attributes,
        success: function(model, state, response){
            console.log(model);
        },
        error: function(error, e, r){
            if(error.responseJSON)
                var error = error.responseJSON.errors;
                $.each(error, function(index, value){
                    console.log('ERROR '+(index+1)+': ' + value);
                });
        }
    });
});