var Operator = require('./operator');


/**
 * Operator inheritance
 */
GreaterThan.prototype = Object.create(Operator.prototype);


/**
 * GreaterThan constructor
 * @param {string} column column name
 * @param {[type]} value  value to compare
 */
function GreaterThan(column, value) {
	Operator.call(this, column, '>', value);
};


/**
 * to string
 * @return {string} string that represents the instance
 */
GreaterThan.prototype.toString = function() {
	return Operator.prototype.toString.call(this);
};

/*----------  Module exports  ----------*/
module.exports = GreaterThan;
