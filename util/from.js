/**
 * From constructor
 */
function From() {
	this._database = undefined;
	this._table = undefined;
};


/**
 * database get/set
 * @param  {string} database database name to be recorded
 * @return {string}          recorded database name
 * @return {From}            the instance
 */
From.prototype.database = function(database) {
	if (database) {
		this._database = database;
		return this;
	}
	return this._database;
};

/**
 * table get/set
 * @param  {string} table table name to be recorded
 * @return {string}       recorded table name
 * @return {From}         the instance
 */
From.prototype.table = function(table) {
	if (table) {
		this._table = table;
		return this;
	}
	return this._table;
};

/**
 * set database and table
 * @param  {string} database database name
 * @param  {string} table    table name
 * @return {From}            the instance
 */
From.prototype.from = function(database, table) {
	if (table) {
		this.database(database);
		this.table(table);
	} else {
		this.table(database); //one parameter
	}
	return this;
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
