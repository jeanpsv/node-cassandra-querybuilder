var Operator = require('./operator');
var Equal = require('./eq');


/**
 * Operator inheritance
 */
Remove.prototype = Object.create(Operator.prototype);


/**
 * Remove constructor
 * @param {string} column columns
 * @param {[type]} value  value to set
 */
function Remove(column, value) {
	Operator.call(this, new Equal(column, column, true).toString(), '-', value);
};


/**
 * to string
 * @return {string} string that represents the instance
 */
Remove.prototype.toString = function() {
	return Operator.prototype.toString.call(this);
};

/*----------  Module exports  ----------*/
module.exports = Remove;
