/**
 * Limit constructor
 * @param {integer} limit limit to set
 */
function Limit(limit) {
	this._limit = limit;
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
