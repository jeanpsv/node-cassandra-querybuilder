var Operator = require('./operator');


/**
 * Operator inheritance
 */
Equal.prototype = Object.create(Operator.prototype);


/**
 * Equal constructor
 * @param {string} column column name
 * @param {[type]} value  value to set
 */
function Equal(column, value) {
	Operator.call(this, column, '=', value);
};


/**
 * to string
 * @return {string} string that represents the instance
 */
Equal.prototype.toString = function() {
	return Operator.prototype.toString.call(this);
};

/*----------  Module exports  ----------*/
module.exports = Equal;
