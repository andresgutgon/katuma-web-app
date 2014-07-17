/** @jsx React.DOM */

'use strict';

var React = require('react')
  , InitializersBase = require('./initializers/base')
  , WelcomeInterface = require('./components/interfaces/welcome/base')
  , browser_locale = navigator.language
  , I18nLib = require('./lib/i18n');

InitializersBase.run();

I18nLib.initialize();
I18nLib.setLocale(browser_locale);

React.renderComponent(
  <WelcomeInterface />
, document.getElementById('js-app')
);
