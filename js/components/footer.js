/** @jsx React.DOM */

'use strict';

var React = require('react')
  , LanguageSwitcher = require('./language-swicher')
  , Footer;

Footer = React.createClass({
  /**
   * When locale swicher change force update
   */
  _onLocaleChange: function () {
    this.props.onLocaleChange();
  },

  /**
   * @return {object}
   */
  render: function () {
    return (
      <div className="footer">
        <div id="languages">
          <LanguageSwitcher onLocaleChange={this._onLocaleChange} />
        </div>
      </div>
    );
  }
});

module.exports = Footer;
