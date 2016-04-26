var Operator = require('./operator');


/**
 * Operator inheritance
 */
LessThanOrEqual.prototype = Object.create(Operator.prototype);


/**
 * LessThanOrEqual constructor
 * @param {string} column column name
 * @param {[type]} value  value to compare
 */
function LessThanOrEqual(column, value) {
	Operator.call(this, column, '<=', value);
};


/**
 * to string
 * @return {string} string that represents the instance
 */
LessThanOrEqual.prototype.toString = function() {
	return Operator.prototype.toString.call(this);
};

/*----------  Module exports  ----------*/
module.exports = LessThanOrEqual;
