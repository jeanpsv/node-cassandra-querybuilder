var UUID = require('../utils/uuid');

/**
 * Operator constructor
 * @param {string} column   column name
 * @param {string} operator operator to apply
 * @param {string} value    value to set
 */
function Operator() {
	this._column = undefined;
	this._operator = undefined;
	this._value = undefined;
};


/**
 * build operator query
 * @param  {string} column   column name
 * @param  {string} operator operator to apply
 * @param  {string} value    value to set
 */
Operator.prototype.compile = function(column, operator, value) {
	this._column = column;
	this._operator = operator;
	this._value = (typeof value === 'number' || value instanceof UUID) ? value.toString() : '\'' + value + '\'';
};

/**
 * Equal operator
 * @param  {string} column column name
 * @param  {string} value  value to set
 * @return {Operator}      the instance
 */
Operator.prototype.eq = function(column, value) {
	this.compile(column, '=', value);
	return this;
};

/**
 * Less than operator
 * @param  {string} column column name
 * @param  {string} value  value to set
 * @return {Operator}      the instance
 */
Operator.prototype.lt = function(column, value) {
	this.compile(column, '<', value);
	return this;
};

/**
 * Less than or Equal operator
 * @param  {string} column column name
 * @param  {string} value  value to set
 * @return {Operator}      the instance
 */
Operator.prototype.lte = function(column, value) {
	this.compile(column, '<=', value);
	return this;
};

/**
 * Greater operator
 * @param  {string} column column name
 * @param  {string} value  value to set
 * @return {Operator}      the instance
 */
Operator.prototype.gt = function(column, value) {
	this.compile(column, '>', value);
	return this;
};

/**
 * Greater than or Equal operator
 * @param  {string} column column name
 * @param  {string} value  value to set
 * @return {Operator}      the instance
 */
Operator.prototype.gte = function(column, value) {
	this.compile(column, '>=', value);
	return this;
};

/**
 * to string
 * @return {string} string that represents the instance
 */
Operator.prototype.toString = function() {
	var to_string = [];
	to_string.push(this._column);
	to_string.push(this._operator);
	to_string.push(this._value);

	return to_string.join(' ');
};

/*----------  Module exports  ----------*/
module.exports = Operator;
