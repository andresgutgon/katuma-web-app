/** @jsx React.DOM */

'use strict';


var React = require('react')
  , Header = require('../../header')
  // , Footer = require('./../footer')
  , WelcomeBody = require('./body')
  , WelcomeInterface;

WelcomeInterface = React.createClass({
  /**
   * @return {object}
   */
  render: function () {
    return (
      <div id="publicLayout">
        <Header />
        <WelcomeBody />
      </div>
    );
  },
});

module.exports = WelcomeInterface;
