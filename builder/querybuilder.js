var Select = require('../statements/select');
var Insert = require('../statements/insert');
var Update = require('../statements/update');
var Delete = require('../statements/delete');

var Equal = require('../operators/eq');
var LessThan = require('../operators/lt');
var LessThanOrEqual = require('../operators/lte');
var GreaterThan = require('../operators/gt');
var GreaterThanOrEqual = require('../operators/gte');

/**
 * QueryBuilder constructor
 */
function QueryBuilder() {};


/**
 * Select statement
 * @return {Select} new Select instance
 */
QueryBuilder.select = function() {
	return new Select();
};

/**
 * Insert statement
 * @return {Insert} new Insert instance
 */
QueryBuilder.insert = function() {
	return new Insert();
};

/**
 * Update statement
 * @return {Update} new Update instance
 */
QueryBuilder.update = function() {
	return new Update();
};

/**
 * Delete statement
 * @return {Delete} new Delete instance
 */
QueryBuilder.delete = function() {
	return new Delete();
};

/**
 * Equal operator
 * @param  {string} column column name
 * @param  {string} value  value
 * @return {Operator}      new assignment
 */
QueryBuilder.eq = function(column, value) {
	return new Equal(column, value);
};

/**
 * Less than operator
 * @param  {string} column column name
 * @param  {string} value  value to set
 * @return {Operator}      new assignment
 */
QueryBuilder.lt = function(column, value) {
	return new LessThan(column, value);
};

/**
 * Less than or Equal operator
 * @param  {string} column column name
 * @param  {string} value  value to set
 * @return {Operator}      new assignment
 */
QueryBuilder.lte = function(column, value) {
	return new LessThanOrEqual(column, value);
};

/**
 * Greater than operator
 * @param  {string} column column name
 * @param  {string} value  value to set
 * @return {Operator}      new assignment
 */
QueryBuilder.gt = function(column, value) {
	return new GreaterThan(column, value);
};

/**
 * Greater than or Equal operator
 * @param  {string} column column name
 * @param  {string} value  value to set
 * @return {Operator}      new assignment
 */
QueryBuilder.gte = function(column, value) {
	return new GreaterThanOrEqual(column, value);
};


QueryBuilder.Types = {
	UUID: require('../utils/uuid')
};


/*----------  Module exports  ----------*/
module.exports = QueryBuilder;
