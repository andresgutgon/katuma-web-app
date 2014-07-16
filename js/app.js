/** @jsx React.DOM */

'use strict';

var React = require('react')
  , WelcomeInterface = require('./components/interfaces/welcome/base')
  , counterpart = require('counterpart')
  , Translate   = require('react-translate-component')
  , _t;

// this is a counterpart-style convenience function that
// returns a React component
_t = Translate.translate;

// load our own translations
counterpart.registerTranslations('en', require('../locales/en'));
counterpart.registerTranslations('es', require('../locales/es'));
counterpart.registerTranslations('ca', require('../locales/ca'));

counterpart.setLocale('ca');

React.renderComponent(
  <WelcomeInterface />,
  document.getElementById('js-app')
);
