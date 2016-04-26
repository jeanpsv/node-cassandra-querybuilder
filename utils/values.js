var Equal = require('../operators/eq');
/**
 * Values constructor
 */
function Values() {
	this._values = [];
};


/**
 * prepare value
 * @param  {[type]} value value to be prepared
 * @return {string}       prepared value
 */
Values.prepare = function(value) {
	if (value instanceof Array) {
		var array_string = [];
		for (var index in value) {
			array_string.push(Values.prepare(value[index]));
		}
		return '[' + array_string + ']';
	} else {
		return (typeof value === 'string') ? '\'' + value + '\'' : value.toString();
	}
};

/**
 * array of the values
 * @param  {array} values array of values to be recorded
 * @return {[object|array]}        this instance(on set) array of the values separated by comma(on get)
 */
Values.prototype.values = function(values) {
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
Values.prototype.toString = function() {
	var prepared_values = [];
	for (var i = 0; i < this._values.length; i++) {
		prepared_values.push(Values.prepare(this._values[i]));
	}
	return prepared_values.join();
};


/*----------  Module exports  ----------*/
module.exports = Values;
