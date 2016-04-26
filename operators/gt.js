var Operator = require('./operator');


/**
 * Operator inheritance
 */
GreaterThan.prototype = Object.create(Operator.prototype);


/**
 * GreaterThan constructor
 * @param {string} column column name
 * @param {[type]} value  value to set
 * @param {boolean} force    disable prepare if true
 */
function GreaterThan(column, value, force) {
	Operator.call(this, column, '>', value, force);
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
