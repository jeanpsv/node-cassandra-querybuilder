var Operator = require('./operator');
var Equal = require('./eq');


/**
 * Operator inheritance
 */
Decrement.prototype = Object.create(Operator.prototype);


/**
 * Decrement constructor
 * @param {string} column columns
 */
function Decrement(column) {
	Operator.call(this, new Equal(column, column, true).toString(), '-', 1);
};


/**
 * to string
 * @return {string} string that represents the instance
 */
Decrement.prototype.toString = function() {
	return Operator.prototype.toString.call(this);
};

/*----------  Module exports  ----------*/
module.exports = Decrement;
