var Operator = require('./operator');


/**
 * Operator inheritance
 */
ContainsKey.prototype = Object.create(Operator.prototype);


/**
 * ContainsKey constructor
 * @param {string} column column name
 * @param {[type]} value  value to compare
 */
function ContainsKey(column, value) {
	Operator.call(this, column, 'CONTAINS KEY', value);
};


/**
 * to string
 * @return {string} string that represents the instance
 */
ContainsKey.prototype.toString = function() {
	return Operator.prototype.toString.call(this);
};

/*----------  Module exports  ----------*/
module.exports = ContainsKey;
