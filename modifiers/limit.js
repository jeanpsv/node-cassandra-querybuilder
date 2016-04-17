/**
 * Limit constructor
 * @param {integer} limit limit to set
 */
function Limit(limit) {
	this._limit = undefined;
};


/**
 * limit get/set
 * @param  {int} limit limit
 * @return {string}       recorded limit
 * @return {Limit}        the instance
 */
Limit.prototype.limit = function(limit) {
	if (limit) {
		this._limit = limit;
		return this;
	} else {
		return this._limit;
	}
};

/**
 * to string
 * @return {string} string that represents the instance
 */
Limit.prototype.toString = function() {
	var to_string = [];
	to_string.push('LIMIT');
	to_string.push(this._limit);
	return to_string.join(' ');
};


/*----------  Module exports  ----------*/
module.exports = Limit;
