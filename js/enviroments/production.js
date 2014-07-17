'use strict';

var VARIABLES
 , api_domain = '//katuma.org'
 , api_version = '1';

VARIABLES = {
  api_domain: api_domain
, api_version: api_version
, api_base: '/api/v' + api_version + '/'
, enviroment: 'production'
};

module.exports = VARIABLES;
