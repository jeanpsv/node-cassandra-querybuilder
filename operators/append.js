var Operator = require('./operator');
var Equal = require('./eq');


/**
 * Operator inheritance
 */
Append.prototype = Object.create(Operator.prototype);


/**
 * Append constructor
 * @param {string} column columns
 * @param {array} value  value to set
 */
function Append(column, value) {
	if (!(value instanceof Array)) {
		value = [value];
	}
	Operator.call(this, new Equal(column, column, true).toString(), '+', value);
};


/**
 * to string
 * @return {string} string that represents the instance
 */
Append.prototype.toString = function() {
	return Operator.prototype.toString.call(this);
};

/*----------  Module exports  ----------*/
module.exports = Append;
