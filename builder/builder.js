var reqlib = require('app-root-path').require;

var FROM = reqlib('/util/from');


function Builder(database, table) {
	if (!database && !table) throw new Error('missing parameters: ([database,] table)')
	this._from = new FROM(database, table);
};

Builder.prototype.toString = function() {
	return this._from.toString();
};


/*----------  Module exports  ----------*/
module.exports = Builder;
