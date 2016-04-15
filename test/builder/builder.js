process.NODE_ENV = 'test';

var reqlib = require('app-root-path').require;
var assert = require('assert');
var Builder = reqlib('/builder/builder');

describe('Builder', function() {
	describe('#constructor', function() {
		it('should create an instance of Builder', function() {
			var b1 = new Builder('table');
			assert.ok(b1);
			var b2 = new Builder('database', 'table');
			assert.ok(b2);
		});
		it('should throw an Error expection', function() {
			assert.throws(function() {
				var builder = new Builder();
			}, function(err) {
				if ((err instanceof Error) && /missing parameters: \(\[database,\] table\)/.test(err)) {
					return true;
				}
			});
		});
	});
	describe('#toString', function() {
		it('should get string representation of the instance', function() {
			var database = 'database';
			var table = 'table';
			var builder = new Builder(database, table);
			assert.ok(builder);
			assert.equal(builder.toString(), " FROM " + database + "." + table);
		});
		it('should get string representation of the instance (only table)', function() {
			var table = 'table';
			var builder = new Builder(table);
			assert.ok(builder);
			assert.equal(builder.toString(), " FROM " + table);
		});
	});
});