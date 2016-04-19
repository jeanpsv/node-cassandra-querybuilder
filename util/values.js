var UUID = require('./uuid');

/**
 * Values constructor
 */
function Values() {
	this._columns = [];
	this._values = [];
};


/**
 * set column and value
 * @param {string} column column name
 * @param {string} value  value to set
 * @return {object}       this instance
 */
Values.prototype.set = function(column, value) {
	if (column && value) {
		this._columns.push(column);
		var prepared_value = (typeof value === 'number' || value instanceof UUID) ? value.toString() : '\'' + value + '\'';
		this._values.push(prepared_value);
	}
	return this;
};

/**
 * array of the columns
 * @param  {array} columns array of colums to be recorded
 * @return {[object|array]}         this instance(on set) or array of the columns separated by comma(on get)
 */
Values.prototype.columns = function(columns) {
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
Values.prototype.values = function(values) {
	if (values) {
		var value = undefined;
		for (var i = 0; i < values.length; i++) {
			value = (typeof values[i] === 'number' || values[i] instanceof UUID) ? values[i].toString() : '\'' + values[i] + '\'';
			this._values.push(value);
		}
		return this;
	}
	return this._values.join();
};

/**
 * to string
 * @return {string} string that represents the instance
 */
Values.prototype.toString = function() {
	var all = [];
	var length = this._values.length;
	for (var i = 0; i < length; i++) {
		all.push(this._columns[i] + ' = ' + this._values[i]);
	}
	return all.toString();
};


/*----------  Module exports  ----------*/
module.exports = Values;
