/** @jsx React.DOM */

'use strict';


var React = require('react')
  , Header = require('../../header')
  , Footer = require('../../footer')
  , WelcomeBody = require('./body')
  , WelcomeInterface;

WelcomeInterface = React.createClass({
  /**
   * When locale swicher change force update
   */
  _onLocaleChange: function () {
    this.forceUpdate();
  },

  /**
   * @return {object}
   */
  render: function () {
    return (
      <div id="publicLayout">
        <Header />
        <WelcomeBody />
        <Footer onLocaleChange={this._onLocaleChange} />
      </div>
    );
  },
});

module.exports = WelcomeInterface;
