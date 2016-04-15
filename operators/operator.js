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
	this._value = value;
};

/**
 * Equal operator
 * @param  {string} column column name
 * @param  {string} value  value to set
 */
Operator.prototype.eq = function(column, value) {
	this.compile(column, '=', value);
};

/**
 * Less than operator
 * @param  {string} column column name
 * @param  {string} value  value to set
 */
Operator.prototype.lt = function(column, value) {
	this.compile(column, '<', value);
};

/**
 * Less than or Equal operator
 * @param  {string} column column name
 * @param  {string} value  value to set
 */
Operator.prototype.lte = function(column, value) {
	this.compile(column, '<=', value);
};

/**
 * Greater operator
 * @param  {string} column column name
 * @param  {string} value  value to set
 */
Operator.prototype.gt = function(column, value) {
	this.compile(column, '>', value);
};

/**
 * Greater than or Equal operator
 * @param  {string} column column name
 * @param  {string} value  value to set
 */
Operator.prototype.gte = function(column, value) {
	this.compile(column, '>=', value);
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
