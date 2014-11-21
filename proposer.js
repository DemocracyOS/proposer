var ripple = require('ripple');
var template = require('./template.html');

/**
 *  Create a proposer icon.
 *
 * @param {Object} proposer should be set:
 *
 * {String} data.imageUrl Url for link image icon
 * {String} data.image url for the image source jpg| png | etc.
 * {String} data.authorTitle title for the autor
 * {String} data.authorUrl url to the author profile/page/external link
 * {String} data.name Name of the author
 * {String} data.affiliationTitle Affiliations of the author.
 * {String} data.affiliationUrl Afiliations of the url.
 * {String} data.affiliation  name of the author.
 *
 * @constructor
 */
function Proposer (proposer) {
  if (!this instanceof Proposer) {
    return new Proposer(proposer);
  }

  var View = ripple(template);
  return new View(proposer);
}

module.exports = Proposer;
