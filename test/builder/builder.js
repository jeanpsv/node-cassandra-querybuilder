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
		it('should get string representation of the instance with From', function() {
			var database = 'database';
			var table = 'table';
			var builder = new Builder();
			builder.from(database, table);
			var to_string = [];
			to_string.push('FROM');
			to_string.push(database + '.' + table);
			assert.equal(builder.toString(true), to_string.join(' '));
		});
		it('should get string representation of the instance with From (only table)', function() {
			var table = 'table';
			var builder = new Builder();
			builder.from(table);
			var to_string = [];
			to_string.push('FROM');
			to_string.push(table);
			assert.equal(builder.toString(true), to_string.join(' '));
		});
		it('should get string representation of the instance without From', function() {
			var database = 'database';
			var table = 'table';
			var builder = new Builder();
			builder.from(database, table);
			var to_string = [];
			to_string.push(database + '.' + table);
			assert.equal(builder.toString(false), to_string.join(' '));
		});
		it('should get string representation of the instance without From (only table)', function() {
			var table = 'table';
			var builder = new Builder();
			builder.from(table);
			var to_string = [];
			to_string.push(table);
			assert.equal(builder.toString(false), to_string.join(' '));
		});
	});
});