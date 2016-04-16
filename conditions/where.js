/**
 * Where constructor
 * @param {Operator} clause condition
 */
function Where(clause) {
	this._clauses = [];
	this._clauses.push('WHERE');
	if (clause) {
		this._clauses.push(clause.toString());
	}
};


/**
 * concat conditions
 * @param  {Operator} clause condition
 * @return {Where}        the instance
 */
Where.prototype.and = function(clause) {
	if (clause) {
		this._clauses.push('AND');
		this._clauses.push(clause.toString());
	}
	return this;
};

/**
 * to string
 * @return {string} string that represents the instance
 */
Where.prototype.toString = function() {

	return this._clauses.join(' ');
};

/*----------  Module exports  ----------*/
module.exports = Where;
