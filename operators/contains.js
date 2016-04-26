var Operator = require('./operator');


/**
 * Operator inheritance
 */
Contains.prototype = Object.create(Operator.prototype);


/**
 * Contains constructor
 * @param {string} column column name
 * @param {[type]} value  value to compare
 */
function Contains(column, value) {
	Operator.call(this, column, 'CONTAINS', value);
};


/**
 * to string
 * @return {string} string that represents the instance
 */
Contains.prototype.toString = function() {
	return Operator.prototype.toString.call(this);
};

/*----------  Module exports  ----------*/
module.exports = Contains;
