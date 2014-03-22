(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['privateContentView'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div>\n	<div class=\"jumbotron\">\n		<div class=\"container\">\n	    	<h1>Welcome User</h1>\n	    	<p>name: ";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.name); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n	    	<p>email: ";
  if (stack1 = helpers.email) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.email); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n	    </div>\n	</div>\n</div>\n";
  return buffer;
  });
templates['privateLayout'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div id=\"topbarRegion\" class=\"navbar navbar-inverse navbar-fixed-top\"></div>\n<div id=\"contentRegion\"></div>";
  });
templates['privateTopbarView'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"container\">\n    <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n        </button>\n        <a class=\"navbar-brand\" href=\"#user\">Katuma</a>\n    </div>\n    <ul class=\"nav navbar-nav navbar-right\">\n      <li><a href=\"#\">Log Out</a></li>      \n    </ul>\n</div>";
  });
templates['publicContentView'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"jumbotron\">\n    <div class=\"container\">\n        <h1>Welcome to Katuma</h1>\n\n        <h2>Manage your collaborative consumption groups.</h2>\n        <br/>\n        <p>Join your friends and create new collaborative consumption groups.</p>\n        <p>Discover others groups and boost your community.</p>\n        <p>Manage group members throught waiting lists and committees.</p>\n 		<p>Track down product informations, orders, payments and financial situation.</p>\n    </div>\n</div>\n<div id=\"createAccount\">\n	<div class=\"container\">\n		<h1>Create account</h1>\n		<form role=\"form\">\n			<div class=\"form-group\">\n				<label for=\"exampleInputEmail1\">User name</label>\n				<input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"User name\">\n			</div>\n			<div class=\"form-group\">\n				<label for=\"exampleInputEmail1\">Email address</label>\n				<input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"Enter email\">\n			</div>\n			<div class=\"form-group\">\n				<label for=\"exampleInputPassword1\">Password</label>\n				<input type=\"password\" class=\"form-control\" id=\"password\" placeholder=\"Password\">\n			</div>\n			<div class=\"form-group\">\n				<label for=\"exampleInputPassword1\">Repeat Password</label>\n				<input type=\"password\" class=\"form-control\" id=\"repeatPassword\" placeholder=\"Repeat Password\">\n			</div>\n			<button id=\"registerUser\" type=\"submit\" class=\"btn btn-primary\">Create Account</button>\n		</form>\n	</div>\n</div>";
  });
templates['publicLayout'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div id=\"topbarRegion\" class=\"navbar navbar-inverse navbar-fixed-top\"></div>\n<div id=\"contentRegion\"></div>";
  });
templates['publicTopbarView'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"container\">\n    <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n        </button>\n        <a class=\"navbar-brand\" href=\"#\">Katuma</a>\n    </div>\n\n    <div class=\"navbar-collapse collapse\">\n        <form class=\"navbar-form navbar-right\">\n            <div class=\"form-group\">\n                <input type=\"text\" placeholder=\"Email\" class=\"form-control\">\n            </div>\n            <div class=\"form-group\">\n                <input type=\"password\" placeholder=\"Password\" class=\"form-control\">\n            </div>\n            <button id=\"\" type=\"submit\" class=\"btn btn-success signIn\">Sign in</button>\n        </form>\n    </div><!--/.navbar-collapse -->\n</div>";
  });
})();