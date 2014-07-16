/** @jsx React.DOM */

'use strict';

var React = require('react')
  , WelcomeInterface = require('./components/interfaces/welcome/base');

React.renderComponent(
  <WelcomeInterface />,
  document.getElementById('js-app')
);