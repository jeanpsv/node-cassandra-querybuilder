var Operator = require('./operator');


/**
 * Operator inheritance
 */
LessThan.prototype = Object.create(Operator.prototype);


/**
 * LessThan constructor
 * @param {string} column column name
 * @param {[type]} value  value to set
 * @param {boolean} force    disable prepare if true
 */
function LessThan(column, value, force) {
	Operator.call(this, column, '<', value, force);
};


/**
 * to string
 * @return {string} string that represents the instance
 */
LessThan.prototype.toString = function() {
	return Operator.prototype.toString.call(this);
};

/*----------  Module exports  ----------*/
module.exports = LessThan;
