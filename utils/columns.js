var Equal = require('../operators/eq');
/**
 * Values constructor
 */
function Values() {
	this._columns = [];
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
 * to string
 * @return {string} string that represents the instance
 */
Values.prototype.toString = function() {
	var all = [];
	var length = this._columns.length;
	for (var i = 0; i < length; i++) {
		all.push(this._columns[i]);
	}
	return all.toString();
};


/*----------  Module exports  ----------*/
module.exports = Values;
