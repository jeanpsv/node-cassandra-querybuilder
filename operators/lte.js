var Operator = require('./operator');


/**
 * Operator inheritance
 */
LessThanOrEqual.prototype = Object.create(Operator.prototype);


/**
 * LessThanOrEqual constructor
 * @param {string} column column name
 * @param {[type]} value  value to set
 * @param {boolean} force    disable prepare if true
 */
function LessThanOrEqual(column, value, force) {
	Operator.call(this, column, '<=', value, force);
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
