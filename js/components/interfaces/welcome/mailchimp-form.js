/**
 * @jsx React.DOM
 */

var React = require('react')
  , MailchimpForm;

MailchimpForm = React.createClass({
  /**
   * @return {object}
   */
  render: function () {
    return (
      <div className="row register">
        <div className="col-lg-12">
          <div id="mc_embed_signup">
            <form action="http://katuma.us3.list-manage2.com/subscribe/post?u=c1fa2ee78d0632dc9cecbffab&amp;id=046995e05b" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="form-inline" role="form" target="_blank">
              <div className="mc-field-group">

                <p>Want to be the <strong>first to know</strong> when we realease the beta?</p>

                <div className="form-group">
                  {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
                  <div style={{position: 'absolute', left: '-5000px'}}>
                    <input type="text" name="b_c1fa2ee78d0632dc9cecbffab_046995e05b" value="" />
                  </div>
                  <input type="email" value="" name="EMAIL" className="required email" id="mce-EMAIL" placeholder="Your email" />
                </div>

                <input type="submit" value="SUBSCRIBE" name="subscribe" id="mc-embedded-subscribe" />
              </div>

              <div id="mce-responses" className="clear">
                <div className="response" id="mce-error-response" style={{display: 'none'}}></div>
                <div className="response" id="mce-success-response" style={{display: 'none'}}></div>
              </div>
            </form>
          </div>
        </div>
      </div>
  	);
  },
});

module.exports = MailchimpForm;
