var reqlib = require('app-root-path').require;

var Builder = reqlib('/builder/builder');
var Values = reqlib('/util/values');
var Where = reqlib('/conditions/where');


/**
 * inheritance
 */
Select.prototype = Object.create(Builder.prototype);


/**
 * Select constructor
 */
function Select() {
	Builder.call(this);
	this._values = new Values();
	this._where = new Where();
};


/**
 * array of the columns
 * @param  {array} columns array of colums to be recorded
 * @return {Select}        the instance
 */
Select.prototype.columns = function(columns) {
	this._values.columns(columns);
	return this;
};

/**
 * set database and table
 * @param  {string} database database name
 * @param  {string} table    table name
 * @return {Select}          the instance
 */
Select.prototype.from = function(database, table) {
	Builder.prototype.from.call(this, database, table);
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
 * to string
 * @return {string} string that represents the instance
 */
Select.prototype.toString = function() {
	var to_string = ['SELECT'];
	to_string.push(this._values.columns());
	to_string.push(Builder.prototype.toString.call(this, false));
	to_string.push(this._where.toString() + ';');
	return to_string.join(' ');
};

/*----------  Module exports  ----------*/
module.exports = Select;
