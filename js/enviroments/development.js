'use strict';

var VARIABLES
 , api_domain = '//localhost:3000'
 , api_version = '1';

VARIABLES = {
  api_domain: api_domain
, api_version: api_version
, api_base: '/api/v' + api_version + '/'
, enviroment: 'development'
};

module.exports = VARIABLES;
