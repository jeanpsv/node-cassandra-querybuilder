var reqlib = require('app-root-path').require;

var FROM = reqlib('/util/from');

/**
 * Builder constructor
 * @param {string} database database name
 * @param {string} table    table name
 */
function Builder() {
	this._from = new FROM();
};


/**
 * set database and table
 * @param  {string} database database name
 * @param  {string} table    table name
 * @return {From}            the instance
 */
Builder.prototype.from = function(database, table) {
	return this._from.from(database, table);
};

/**
 * to string
 * @return {string} string that represents the instance
 */
Builder.prototype.toString = function() {
	return this._from.toString();
};


/*----------  Module exports  ----------*/
module.exports = Builder;
