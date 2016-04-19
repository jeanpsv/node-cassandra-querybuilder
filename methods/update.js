var From = require('../util/from');
var Operator = require('../operators/operator');
var Where = require('../conditions/where');


/**
 * Insert constructor
 */
function Update() {
	this._from = new From();
	this._operators = [];
	this._where = new Where();
};


/**
 * set database and table
 * @param  {string} database database name
 * @param  {string} table    table name
 * @return {Update}          the instance
 */
Update.prototype.from = function(database, table) {
	this._from.from(database, table);
	return this;
};

/**
 * set assignment
 * @param {Operator} assignment assignment to recorded
 * @return {Update}             the instance
 */
Update.prototype.set = function(assignment) {
	this._operators.push(assignment.toString());
	return this;
};

/**
 * add condition
 * @param  {Operator} condition clause condition
 * @return {Update}             the instance
 */
Update.prototype.where = function(clause) {
	this._where.where(clause);
	return this;
};

/**
 * concat condition
 * @param  {Operator} clause condition
 * @return {Update}          the instance
 */
Update.prototype.and = function(clause) {
	this._where.and(clause);
	return this;
};

/**
 * to string
 * @return {string} string that represents the instance
 */
Update.prototype.toString = function() {
	var to_string = ['UPDATE'];
	to_string.push(this._from.toString(false));
	to_string.push('SET');
	to_string.push(this._operators.join(', '));
	to_string.push(this._where.toString() + ';');
	return to_string.join(' ');
};


/*----------  Module exports  ----------*/
module.exports = Update;
