/** @jsx React.DOM */

'use strict';


var React = require('react')
  , MailChimpForm = require('./mailChimp-form')
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
              <h1>KATUMA</h1>
              <h2 className="slogan">Skip the middleman, buy directly from the providers.</h2>
            </div>
          </div>

          <div className="services">
            <div className="container">
              <div className="row">
                <div className="col-lg-4">
                  <p>Easily create collaborative consumption groups.</p>
                </div>
                <div className="col-lg-4">
                  <p>Build a meaningful relationship with the providers.</p>
                </div>
                <div className="col-lg-4">
                  <p>An alternative marketplace for providers.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mailchimp Form */}
        <div className="container signin">
          <div className="row description">
            <div className="col-lg-12">
              <p><strong>KATUMA</strong> is a <strong>tool</strong> for <strong>collaborative consumption</strong> groups administrators, members and providers.</p>
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
                    <i className="fa fa-github"></i> <span>KATUMA is open source</span>
                  </a>
                </p>

              </div>

              <div className="col-lg-4">
                <p>
                  <a href="https://twitter.com/katuma_org">
                    <i className="fa fa-twitter"></i> <span>Follow us on twitter</span>
                  </a>
                </p>
              </div>
              <div className="col-lg-4">
                <p>
                  <a href="mailto:info@katuma.org">
                    <i className="fa fa-envelope"></i> <span>Contact us</span>
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
