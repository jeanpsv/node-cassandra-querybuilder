var Equal = require('../operators/eq');
var Values = require('../utils/values');
/**
 * Assignments constructor
 */
function Assignments() {
	this._columns = [];
	this._values = [];
};


/**
 * set column and value
 * @param {string} column column name
 * @param {string} value  value to set
 * @return {object}       this instance
 */
Assignments.prototype.set = function(column, value) {
	if (column && value) {
		this._columns.push(column);
		this._values.push(value);
	}
	return this;
};

/**
 * array of the columns
 * @param  {array} columns array of colums to be recorded
 * @return {[object|array]}         this instance(on set) or array of the columns separated by comma(on get)
 */
Assignments.prototype.columns = function(columns) {
	if (columns) {
		for (var i = 0; i < columns.length; i++) {
			this._columns.push(columns[i]);
		}
		return this;
	}
	return this._columns.join();
};

/**
 * array of the values
 * @param  {array} values array of values to be recorded
 * @return {[object|array]}        this instance(on set) array of the values separated by comma(on get)
 */
Assignments.prototype.values = function(values) {
	if (values) {
		for (var i = 0; i < values.length; i++) {
			this._values.push(values[i]);
		}
		return this;
	} else {
		var prepared_values = [];
		for (var i = 0; i < this._values.length; i++) {
			prepared_values.push(Values.prepare(this._values[i]));
		}
		return prepared_values.join();
	}
};

/**
 * to string
 * @return {string} string that represents the instance
 */
Assignments.prototype.toString = function() {
	var all = [];
	var length = this._values.length;
	for (var i = 0; i < length; i++) {
		all.push(new Equal(this._columns[i], this._values[i]).toString());
	}
	return all.toString();
};


/*----------  Module exports  ----------*/
module.exports = Assignments;
