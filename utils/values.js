var Equal = require('../operators/eq');
var stringifyObject = require('stringify-object');
var UUID = require('./uuid')
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
	switch(typeof value) {
		case 'string':
			if (value === '?') {
				return value;
			}

			var regExp = new RegExp(/\\n/, 'g');

			if (regExp.test(value)) {
				return '\"' + value + '\"';
			}

			return '\'' + value + '\'';

		case 'object':
			if (value instanceof UUID) {
				return value.toString()
			}

			return stringifyObject(value, {
				indent: '',
				singleQuotes: true
			});

		default:
			return value.toString();
	}

	return (typeof value === 'string') ? '\'' + value + '\'' : value.toString();
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
