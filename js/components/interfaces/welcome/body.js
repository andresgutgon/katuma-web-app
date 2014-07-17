/** @jsx React.DOM */

'use strict';


var React = require('react')
  , MailChimpForm = require('./mailChimp-form')
  , I18n = require('../../../lib/i18n')
  , Translate = I18n.Translate
  , Body;

Body = React.createClass({
  /**
   * @return {object}
   */
  render: function () {
    return (
      <div>
        {/* Intro */}
        <div className="jumbotron">
          <div className="container">
            <div className="row header">
              <h1>{I18n.t('katuma.welcome.header.title')}</h1>
              <h2 className="slogan">{I18n.t('katuma.welcome.header.slogan')}</h2>
            </div>
          </div>

          <div className="services">
            <div className="container">
              <div className="row">
                <div className="col-lg-4">
                  <p>{I18n.t('katuma.welcome.services.s_1')}</p>
                </div>
                <div className="col-lg-4">
                  <p>{I18n.t('katuma.welcome.services.s_2')}</p>
                </div>
                <div className="col-lg-4">
                  <p>{I18n.t('katuma.welcome.services.s_3')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mailchimp Form */}
        <div className="container signin">
          <div className="row description">
            <div className="col-lg-12">
              {<Translate component={React.DOM.p} unsafe={true}>katuma.welcome.signin.description</Translate>}
            </div>
          </div>

          <MailChimpForm />
        </div>

        {/* Welcome footer */}
        <div className="footer">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <p>
                  <a href="https://github.com/coopdevs">
                    <i className="fa fa-github"></i> <span>{I18n.t('katuma.welcome.footer.github')}</span>
                  </a>
                </p>

              </div>

              <div className="col-lg-4">
                <p>
                  <a href="https://twitter.com/katuma_org">
                    <i className="fa fa-twitter"></i> <span>{I18n.t('katuma.welcome.footer.twitter')}</span>
                  </a>
                </p>
              </div>
              <div className="col-lg-4">
                <p>
                  <a href="mailto:info@katuma.org">
                    <i className="fa fa-envelope"></i> <span>{I18n.t('katuma.welcome.footer.contact')}</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
  	);
  },
});

module.exports = Body;
