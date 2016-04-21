var From = require('../utils/from');
var Assignments = require('../utils/assignments');


/**
 * Insert constructor
 */
function Insert() {
	this._from = new From();
	this._assignments = new Assignments();
};


/**
 * set database and table
 * @param  {string} database database name
 * @param  {string} table    table name
 * @return {Insert}          the instance
 */
Insert.prototype.from = function(database, table) {
	this._from.from(database, table);
	return this;
};

/**
 * array of the columns
 * @param  {array} columns array of colums to be recorded
 * @return {Insert}        the instance
 */
Insert.prototype.columns = function(columns) {
	this._assignments.columns(columns);
	return this;
};

/**
 * array of the values
 * @param  {array} values  array of values to be recorded
 * @return {Insert}        the instance
 */
Insert.prototype.values = function(values) {
	this._assignments.values(values);
	return this;
};

/**
 * to string
 * @return {string} string that represents the instance
 */
Insert.prototype.toString = function() {
	var to_string = ['INSERT INTO'];
	to_string.push(this._from.toString(false));
	to_string.push('(' + this._assignments.columns() + ')');
	to_string.push('VALUES');
	to_string.push('(' + this._assignments.values() + ');');
	return to_string.join(' ');
};

/*----------  Module exports  ----------*/
module.exports = Insert;
