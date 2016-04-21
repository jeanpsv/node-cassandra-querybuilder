var From = require('../utils/from');
var Where = require('../conditions/where');


/**
 * Delete constructor
 */
function Delete() {
	this._from = new From();
	this._where = new Where();
};


/**
 * set database and table
 * @param  {string} database database name
 * @param  {string} table    table name
 * @return {Delete}          the instance
 */
Delete.prototype.from = function(database, table) {
	this._from.from(database, table);
	return this;
};

/**
 * add condition
 * @param  {Operator} condition clause condition
 * @return {Delete}             the instance
 */
Delete.prototype.where = function(clause) {
	this._where.where(clause);
	return this;
};

/**
 * concat condition
 * @param  {Operator} clause condition
 * @return {Delete}          the instance
 */
Delete.prototype.and = function(clause) {
	this._where.and(clause);
	return this;
};

/**
 * to string
 * @return {string} string that represents the instance
 */
Delete.prototype.toString = function() {
	var to_string = ['DELETE'];
	to_string.push(this._from.toString(true));
	to_string.push(this._where.toString());
	return to_string.join(' ') + ';';
};


/*----------  Module exports  ----------*/
module.exports = Delete;
