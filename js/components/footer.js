/** @jsx React.DOM */

'use strict';

var React = require('react')
  , UIConstants = require('../constants/ui')
  , LanguageSwitcher = require('./language-swicher')
  , Footer;

Footer = React.createClass({

  getDefaultProps: function () {
    return {
      locales: UIConstants.LOCALES_ARRAY,
    };
  },

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
          <LanguageSwitcher locales={this.props.locales} onLocaleChange={this._onLocaleChange} />
        </div>
      </div>
    );
  }
});

module.exports = Footer;
