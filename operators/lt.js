var Operator = require('./operator');


/**
 * Operator inheritance
 */
LessThan.prototype = Object.create(Operator.prototype);


/**
 * LessThan constructor
 * @param {string} column column name
 * @param {[type]} value  value to set
 */
function LessThan(column, value) {
	Operator.call(this, column, '<', value);
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
