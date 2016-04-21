process.env.NODE_ENV = 'test';

var assert = require('assert');
var From = require('../../utils/from');

describe('From', function() {
	describe('#constructor', function() {
		it('should create an instance of From', function() {
			var f = new From();
			assert.ok(f);
		});
	});
	describe('#database', function() {
		it('should set and get database', function() {
			var database = 'database';
			var f = new From();
			f.database(database);
			assert.equal(f.database(), database);
		});
	});
	describe('#table', function() {
		it('should set and get table', function() {
			var table = 'table';
			var f = new From();
			f.table(table);
			assert.equal(f.table(), table);
		});
	});
	describe('#from', function() {
		it('should set database and table', function() {
			var database = 'database';
			var table = 'table';
			var f = new From();
			f.from(database, table);
			assert.equal(f.database(), database);
			assert.equal(f.table(), table);
		});
		it('should set table only', function() {
			var table = 'table';
			var f = new From(table);
			f.from(table);
			assert.equal(f.table(), table);
		});
	})
	describe('#toString', function() {
		it('should get string representation of the instance with From', function() {
			var database = 'database';
			var table = 'table';
			var f = new From();
			f.from(database, table);
			var to_string = [];
			to_string.push('FROM');
			to_string.push(database + '.' + table);
			assert.equal(f.toString(true), to_string.join(' '));
		});
		it('should get string representation of the instance with From (only table)', function() {
			var table = 'table';
			var f = new From();
			f.from(table);
			var to_string = [];
			to_string.push('FROM');
			to_string.push(table);
			assert.equal(f.toString(true), to_string.join(' '));
		});
		it('should get string representation of the instance without From', function() {
			var database = 'database';
			var table = 'table';
			var f = new From();
			f.from(database, table);
			var to_string = [];
			to_string.push(database + '.' + table);
			assert.equal(f.toString(false), to_string.join(' '));
		});
		it('should get string representation of the instance without From (only table)', function() {
			var table = 'table';
			var f = new From();
			f.from(table);
			var to_string = [];
			to_string.push(table);
			assert.equal(f.toString(false), to_string.join(' '));
		});
	});
});
