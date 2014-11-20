var ripple = require('ripple');
var template = require('./template');

/**
 *
 * @param data
 * @constructor
 */
function Proposer (data) {
  if (!this instanceof Proposer) {
    return new Proposer(data);
  }

  var View = ripple(template);
  return new View(data);
}
