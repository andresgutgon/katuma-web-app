/** @jsx React.DOM */

'use strict';

var React = require('react')
  , LanguageSwitcher
  , counterpart = require('counterpart')
  , Translate   = require('react-translate-component')
  , _t;

// this is a counterpart-style convenience function that
// returns a React component
_t = Translate.translate;

LanguageSwitcher = React.createClass({
  handleChange: function (event) {
    counterpart.setLocale(event.target.value);
    this.props.onLocaleChange();
  },

  render: function () {
    var options = this.props.locales.map(function (locale) {
      var translationKey = 'katuma.languages.' + locale;

      return <Translate key={locale} value={locale} component={React.DOM.option}>{translationKey}</Translate>;
    });

    return (
      <select defaultValue={counterpart.getLocale()} onChange={this.handleChange}>
        {options}
      </select>
    );
  }
});

module.exports = LanguageSwitcher;


