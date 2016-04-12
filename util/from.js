var _database;
var _table;


/**
 * From constructor
 * @param {string} database database name
 * @param {string} table    table name
 */
function From(database, table) {
	_database = database;
	_table = table;
};


/**
 * database get/set
 * @param  {string} database database name to be recorded
 * @return {string}          recorded database name
 */
From.prototype.database = function(database) {
	if (database) {
		_database = database;
		return;
	}
	return _database;
};

/**
 * table get/set
 * @param  {string} table table name to be recorded
 * @return {string}       recorded table name
 */
From.prototype.table = function(table) {
	if (table) {
		_table = table;
		return;
	}
	return _table;
};

/**
 * to string
 * @return {string} string that represents the instance
 */
From.prototype.toString = function () {
	var to_string = " FROM ";
	if (_database) to_string = to_string + _database + ".";
	to_string = to_string + _table;

	return to_string;
};


/*----------  Module exports  ----------*/
module.exports = From;
