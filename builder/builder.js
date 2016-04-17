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
 * @param  {boolean} withFrom true for with 'FROM' and false otherwise
 * @return {string} string that represents the instance
 */
Builder.prototype.toString = function(withFrom) {
	return this._from.toString(withFrom);
};


/*----------  Module exports  ----------*/
module.exports = Builder;
