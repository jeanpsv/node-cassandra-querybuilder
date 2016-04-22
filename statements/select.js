var From = require('../utils/from');
var Columns = require('../utils/columns');
var Where = require('../conditions/where');
var Limit = require('../modifiers/limit');


/**
 * Select constructor
 */
function Select() {
	this._from = new From();
	this._columns = new Columns();
	this._where = new Where();
	this._limit = new Limit();
};


/**
 * array of the columns
 * @param  {array} columns array of colums to be recorded
 * @return {Select}        the instance
 */
Select.prototype.columns = function(columns) {
	this._columns.columns(columns);
	return this;
};

/**
 * set database and table
 * @param  {string} database database name
 * @param  {string} table    table name
 * @return {Select}          the instance
 */
Select.prototype.from = function(database, table) {
	this._from.from(database, table);
	return this;
};

/**
 * add condition
 * @param  {Operator} condition clause condition
 * @return {Select}             the instance
 */
Select.prototype.where = function(clause) {
	this._where.where(clause);
	return this;
};

/**
 * concat condition
 * @param  {Operator} clause condition
 * @return {Select}          the instance
 */
Select.prototype.and = function(clause) {
	this._where.and(clause);
	return this;
};

/**
 * limit modifier
 * @param  {int} limit limiter
 * @return {Select}       the instance
 */
Select.prototype.limit = function(limit) {
	this._limit.limit(limit);
	return this;
};

/**
 * to string
 * @return {string} string that represents the instance
 */
Select.prototype.toString = function() {
	var to_string = ['SELECT'];
	to_string.push(this._columns.columns());
	to_string.push(this._from.toString(true));
	if (this._where.toString()) {
		to_string.push(this._where.toString());
	}
	if (this._limit.toString()) {
		to_string.push(this._limit.toString());
	}
	return to_string.join(' ') + ';';
};

/*----------  Module exports  ----------*/
module.exports = Select;
