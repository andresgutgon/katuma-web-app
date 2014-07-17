'use strict';

var $ = require('jquery')
  , jQueryAjax = {};

/**
 * Default handler to show HTTP errors. If you want to ignore one of them you can
 * set the ignore_<error> setting or ignore all errors with ignore_errors setting
 */
jQueryAjax.run = function () {
  $(document).ajaxError(function (e, jqxhr, settings, exception) {
    switch (jqxhr.status) {
    case 401:
      // TODO: display in the UI this error in same way
      // Session expired
      console.log('AJAX error code: ' + jqxhr.status);
      break;

    case 402:
      // TODO: display in the UI this error in same way
      // Forbiden
      console.log('AJAX error code: ' + jqxhr.status);
      break;

    case 503:
      // TODO: display in the UI this error in same way
      // Maintenance
      console.log('AJAX error code: ' + jqxhr.status);
      break;
    }
  });
};

module.exports = jQueryAjax;
