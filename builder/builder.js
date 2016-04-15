var reqlib = require('app-root-path').require;

var FROM = reqlib('/util/from');

/**
 * Builder constructor
 * @param {string} database database name
 * @param {string} table    table name
 */
function Builder(database, table) {
	if (!database && !table) throw new Error('missing parameters: ([database,] table)')
	this._from = new FROM(database, table);
};


/**
 * to string
 * @return {string} string that represents the instance
 */
Builder.prototype.toString = function() {
	return this._from.toString();
};


/*----------  Module exports  ----------*/
module.exports = Builder;
