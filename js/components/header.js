/**
 * @jsx React.DOM
 */

var React = require('react')
  , Header;

Header = React.createClass({
  /**
   * @return {object}
   */
  render: function () {
    return (
      <div className="navbar navbar-inverse navbar-fixed-top">
        <div className="container">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
            </div>

            <div className="navbar-collapse collapse">
                <ul className="nav navbar-nav">
                    <li>
                        <a id="leftButton" href="#createUser">Sign up</a>
                    </li>
                </ul>
                <form className="navbar-form navbar-right">
                    <div className="form-group">
                        <input type="email" placeholder="Email" className="form-control" />
                    </div> <div className="form-group">
                        <input type="password" placeholder="Password" className="form-control" />
                    </div> <button type="submit" className="btn btn-success signIn">Sign in</button>
                </form>
            </div>
        </div>
      </div>
  	);
  },
});

module.exports = Header;
