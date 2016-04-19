var From = require('../util/from');
var Values = require('../util/values');


/**
 * Insert constructor
 */
function Insert() {
	this._from = new From();
	this._values = new Values();
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
	this._values.columns(columns);
	return this;
};

/**
 * array of the values
 * @param  {array} values  array of values to be recorded
 * @return {Insert}        the instance
 */
Insert.prototype.values = function(values) {
	this._values.values(values);
	return this;
};

/**
 * to string
 * @return {string} string that represents the instance
 */
Insert.prototype.toString = function() {
	var to_string = ['INSERT INTO'];
	to_string.push(this._from.toString(false));
	to_string.push('(' + this._values.columns() + ')');
	to_string.push('VALUES');
	to_string.push('(' + this._values.values() + ');');
	return to_string.join(' ');
};

/*----------  Module exports  ----------*/
module.exports = Insert;
