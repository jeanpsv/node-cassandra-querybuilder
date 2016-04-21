var Equal = require('../operators/eq');
/**
 * Values constructor
 */
function Values() {
	this._values = [];
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
			if (typeof this._values[i] === 'string') {
				prepared_values.push('\'' + this._values[i]+ '\'');
			} else {
				prepared_values.push(this._values[i].toString());
			}
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
		if (typeof this._values[i] === 'string') {
			prepared_values.push('\'' + this._values[i]+ '\'');
		} else {
			prepared_values.push(this._values[i].toString());
		}
	}
	return prepared_values.join();
};


/*----------  Module exports  ----------*/
module.exports = Values;
