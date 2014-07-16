/**
 * @jsx React.DOM
 */

var React = require('react')
  , Header = require('../../header')
  // , Footer = require('./../footer')
  , WelcomeBody = require('./body')
  , WelcomeInterface;

/**
 * Retrieve the current TODO data from the TodoStore
 */
function getTodoState() {
  return {
    allTodos: TodoStore.getAll(),
    areAllComplete: TodoStore.areAllComplete()
  };
}

var WelcomeInterface = React.createClass({
  /**
   * @return {object}
   */
  render: function () {
    return (
      <div>
        <Header />
      </div>
    );
  },
});

module.exports = WelcomeInterface;
