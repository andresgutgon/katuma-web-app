/** @jsx React.DOM */

'use strict';

var React = require('react')
  , LanguageSwitcher
  , UIConstants = require('../constants/ui')
  , I18n = require('../lib/i18n')
  , Translate = I18n.Translate;

LanguageSwitcher = React.createClass({

  getDefaultProps: function () {
    return {
      locales: UIConstants.LOCALES_ARRAY,
    };
  },

  handleChange: function (event) {
    I18n.setLocale(event.target.value);
    this.props.onLocaleChange();
  },

  render: function () {
    var options = this.props.locales.map(function (locale) {
      var translationKey = 'katuma.languages.' + locale;

      return <Translate key={locale} value={locale} component={React.DOM.option}>{translationKey}</Translate>;
    });

    return (
      <select defaultValue={I18n.getLocale()} onChange={this.handleChange}>
        {options}
      </select>
    );
  }
});

module.exports = LanguageSwitcher;


