'use strict';

var Base = {}
  , jQueryAjax = require('./jquery_ajax');

/**
 * Default handler to show HTTP errors. If you want to ignore one of them you can
 * set the ignore_<error> setting or ignore all errors with ignore_errors setting
 */
Base.run = function () {
  jQueryAjax.run();
};

module.exports = Base;
