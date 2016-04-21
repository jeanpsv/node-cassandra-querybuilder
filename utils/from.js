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
	} else {
		return this._database;
	}
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
	} else {
		return this._table;
	}
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
 * @param  {boolean} withFrom true for with 'FROM' and false otherwise
 * @return {string} string that represents the instance
 */
From.prototype.toString = function (withFrom) {
	var to_string = (withFrom) ? ['FROM'] : [];
	var reference = (this._database) ? to_string.push(this._database + '.' + this._table) : to_string.push(this._table);

	return to_string.join(' ');
};


/*----------  Module exports  ----------*/
module.exports = From;
