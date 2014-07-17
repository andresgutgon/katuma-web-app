/** @jsx React.DOM */

'use strict';

var React = require('react')
  , WelcomeInterface = require('./components/interfaces/welcome/base')
  , browser_locale = navigator.language
  , I18n = require('./lib/i18n');

I18n.initialize();
I18n.setLocale(browser_locale);

React.renderComponent(
  <WelcomeInterface />,
  document.getElementById('js-app')
);
