var UUID = require('../utils/uuid');

/**
 * Operator constructor
 * @param {string} column   column name
 * @param {string} operator operator to apply
 * @param {[type]} value    value to set
 */
function Operator(column, operator, value) {
	this._column = column;
	this._operator = operator;
	this._value = (typeof value === 'string') ? '\'' + value + '\'' : value.toString();
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
