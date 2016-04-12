/**
 * From constructor
 * @param {string} database database name
 * @param {string} table    table name
 */
function From(database, table) {
	this._database = undefined;
	this._table = undefined;

	if (database) this.database(database);
	if (table) this.table(table);
};


/**
 * database get/set
 * @param  {string} database database name to be recorded
 * @return {string}          recorded database name
 */
From.prototype.database = function(database) {
	if (database) {
		this._database = database;
		return;
	}
	return this._database;
};

/**
 * table get/set
 * @param  {string} table table name to be recorded
 * @return {string}       recorded table name
 */
From.prototype.table = function(table) {
	if (table) {
		this._table = table;
		return;
	}
	return this._table;
};

/**
 * to string
 * @return {string} string that represents the instance
 */
From.prototype.toString = function () {
	var to_string = " FROM ";
	if (this._database) to_string = to_string + this._database + ".";
	to_string = to_string + this._table;

	return to_string;
};


/*----------  Module exports  ----------*/
module.exports = From;
