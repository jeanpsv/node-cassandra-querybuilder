process.env.NODE_ENV = 'test';

var reqlib = require('app-root-path').require;
var assert = require('assert');
var FROM = reqlib('/util/from');

describe('From', function() {
	describe('#constructor', function() {
		it('should create an instance of From', function() {
			var f = new FROM();
			assert.ok(f);
		});
		it('should set database and table', function() {
			var database = 'database';
			var table = 'table';
			var f = new FROM(database, table);
			assert.ok(f);
			assert.equal(f.database(), database);
			assert.equal(f.table(), table);
		});
		it('should set table only', function() {
			var table = 'table';
			var f = new FROM(table);
			assert.equal(f.table(), table);
		});
	});
	describe('#database', function() {
		it('should set and get database', function() {
			var database = 'database';
			var f = new FROM();
			f.database(database);
			assert.equal(f.database(), database);
		});
	});
	describe('#table', function() {
		it('should set and get table', function() {
			var table = 'table';
			var f = new FROM();
			f.table(table);
			assert.equal(f.table(), table);
		});
	});
	describe('#toString', function() {
		it('should get string representation of the instance', function() {
			var database = 'database';
			var table = 'table';
			var f = new FROM(database, table);
			assert.ok(f);
			assert.equal(f.toString(), " FROM " + database + "." + table);
		});
		it('should get string representation of the instance (only table)', function() {
			var table = 'table';
			var f = new FROM(table);
			assert.ok(f);
			assert.equal(f.toString(), " FROM " + table);
		});
	});
});
