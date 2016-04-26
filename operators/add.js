var Operator = require('./operator');
var Equal = require('./eq');


/**
 * Operator inheritance
 */
Add.prototype = Object.create(Operator.prototype);


/**
 * Add constructor
 * @param {string} column columns
 * @param {number} value  value to set
 */
function Add(column, value) {
	Operator.call(this, new Equal(column, column, true).toString(), '+', value);
};


/**
 * to string
 * @return {string} string that represents the instance
 */
Add.prototype.toString = function() {
	return Operator.prototype.toString.call(this);
};

/*----------  Module exports  ----------*/
module.exports = Add;
