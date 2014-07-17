'use strict';

var Translate = require('react-translate-component')
  , counterpart = require('counterpart')
  , I18nLib = {};

/**
 * initialize translations
 */
I18nLib.initialize = function () {
  this.registerTranslations('en', require('../../locales/en.js'));
  this.registerTranslations('en-US', require('../../locales/en'));
  this.registerTranslations('en-GB', require('../../locales/en'));
  this.registerTranslations('en-BB', require('../../locales/en'));
  this.registerTranslations('es', require('../../locales/es'));
  this.registerTranslations('es-ES', require('../../locales/es'));
  this.registerTranslations('es-AR', require('../../locales/es'));
  this.registerTranslations('ca', require('../../locales/ca'));
};

/**
 * this is a counterpart-style convenience function that
 * returns a React component
 *
 * @param {String} key
 * @return {Object}
 */
I18nLib.t = function (key) {
  return Translate.translate(key);
};

/**
 * This generate a React Component for translations
 * Ex.: <Translate component={React.DOM.option}>this.is.a.key</Translate>
 *
 * @return {Object}
 */
I18nLib.Translate = Translate;

/**
 * Original translation library.
 * Helpful when you want a plain string and not a React component
 *
 * @return {string}
 */
I18nLib.counterpart = counterpart;

/**
 * Set current locale. It is a counterpart method
 *
 * @return {string}
 */
I18nLib.getLocale = I18nLib.counterpart.getLocale;

/**
 * Set current locale. It is a counterpart method
 *
 * @param {string} locale
 */
I18nLib.setLocale = function (locale) {
  I18nLib.counterpart.setLocale(locale);
};

/**
 * Register translations.
 * Data is a file with translations
 *
 * @param {string} locale
 * @param {string} data
 */
I18nLib.registerTranslations = function (locale, data) {
  I18nLib.counterpart.registerTranslations(locale, data);
};

module.exports = I18nLib;

