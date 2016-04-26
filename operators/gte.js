var Operator = require('./operator');


/**
 * Operator inheritance
 */
GreaterThanOrEqual.prototype = Object.create(Operator.prototype);


/**
 * GreaterThanOrEqual constructor
 * @param {string} column column name
 * @param {[type]} value  value to set
 * @param {boolean} force    disable prepare if true
 */
function GreaterThanOrEqual(column, value, force) {
	Operator.call(this, column, '>=', value, force);
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
