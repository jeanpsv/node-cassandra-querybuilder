var Operator = require('./operator');
var Equal = require('./eq');


/**
 * Operator inheritance
 */
Increment.prototype = Object.create(Operator.prototype);


/**
 * Increment constructor
 * @param {string} column columns
 */
function Increment(column) {
	Operator.call(this, new Equal(column, column, true).toString(), '+', 1);
};


/**
 * to string
 * @return {string} string that represents the instance
 */
Increment.prototype.toString = function() {
	return Operator.prototype.toString.call(this);
};

/*----------  Module exports  ----------*/
module.exports = Increment;
