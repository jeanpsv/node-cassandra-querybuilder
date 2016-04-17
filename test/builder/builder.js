process.env.NODE_ENV = 'test';

var reqlib = require('app-root-path').require;
var assert = require('assert');
var Builder = reqlib('/builder/builder');

describe('Builder', function() {
	describe('#constructor', function() {
		it('should create an instance of Builder', function() {
			var b = new Builder();
			assert.ok(b);
		});
	});
	describe('#from', function() {
		it('should set database and table', function() {
			var database = 'database';
			var table = 'table';
			var builder = new Builder();
			var f = builder.from(database, table);
			assert.equal(f.database(), database);
			assert.equal(f.table(), table);
		});
	});
	describe('#toString', function() {
		it('should get string representation of the instance', function() {
			var database = 'database';
			var table = 'table';
			var builder = new Builder();
			builder.from(database, table);
			assert.equal(builder.toString(), " FROM " + database + "." + table);
		});
		it('should get string representation of the instance (only table)', function() {
			var table = 'table';
			var builder = new Builder();
			builder.from(table);
			assert.equal(builder.toString(), " FROM " + table);
		});
	});
});