var Operator = require('./operator');


/**
 * Operator inheritance
 */
GreaterThanOrEqual.prototype = Object.create(Operator.prototype);


/**
 * GreaterThanOrEqual constructor
 * @param {string} column column name
 * @param {[type]} value  value to set
 */
function GreaterThanOrEqual(column, value) {
	Operator.call(this, column, '>=', value);
};


/**
 * to string
 * @return {string} string that represents the instance
 */
GreaterThanOrEqual.prototype.toString = function() {
	return Operator.prototype.toString.call(this);
};

/*----------  Module exports  ----------*/
module.exports = GreaterThanOrEqual;
