var Select = require('../methods/select');
var Insert = require('../methods/insert');
var Update = require('../methods/update');
var Delete = require('../methods/delete');
var Operator = require('../operators/operator');


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
	return new Operator().eq(column, value);
};

/**
 * Equal operator
 * @param  {string} column column name
 * @param  {string} value  value to set
 * @return {Operator}      new assignment
 */
QueryBuilder.lt = function(column, value) {
	return new Operator().lt(column, value);
};

/**
 * Less than or Equal operator
 * @param  {string} column column name
 * @param  {string} value  value to set
 * @return {Operator}      new assignment
 */
QueryBuilder.lte = function(column, value) {
	return new Operator().lte(column, value);
};

/**
 * Greater than operator
 * @param  {string} column column name
 * @param  {string} value  value to set
 * @return {Operator}      new assignment
 */
QueryBuilder.gt = function(column, value) {
	return new Operator().gt(column, value);
};

/**
 * Greater than or Equal operator
 * @param  {string} column column name
 * @param  {string} value  value to set
 * @return {Operator}      new assignment
 */
QueryBuilder.gte = function(column, value) {
	return new Operator().gte(column, value);
};


QueryBuilder.Types = {
	UUID: require('../utils/uuid')
};


/*----------  Module exports  ----------*/
module.exports = QueryBuilder;
