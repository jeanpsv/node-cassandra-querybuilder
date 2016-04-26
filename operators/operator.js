var Values = require('../utils/values');
var UUID = require('../utils/uuid');

/**
 * Operator constructor
 * @param {string}  column   column name
 * @param {string}  operator operator to apply
 * @param {[type]}  value    value to set
 * @param {boolean} force    disable prepare if true
 */
function Operator(column, operator, value, force) {
	this._column = column;
	this._operator = operator;
	this._value = (force) ? value : Values.prepare(value);
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
