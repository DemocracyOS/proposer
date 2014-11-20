var ripple = require('ripple');
var template = require('./template.html');

/**
 *  Create a proposer icon.
 *
 * @param {Object} data
 * @param {Object} data
 * @constructor
 */
function Proposer (data) {
  if (!this instanceof Proposer) {
    return new Proposer(data);
  }

  var View = ripple(template);
  return new View(data);
}

module.exports = Proposer;