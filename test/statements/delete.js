process.env.NODE_ENV = 'test';

var assert = require('assert');

var Delete = require('../../statements/delete');
var Equal = require('../../operators/eq');
var From = require('../../utils/from');

describe('Delete', function() {
	describe('#constructor', function() {
		it('should create an instance of Delete', function() {
			var d = new Delete();
			assert.ok(d);
		});
	});
	describe('#from', function() {
		it('should set database and table', function() {
			var d = new Delete();
			assert.ok(d.from('database', 'table'));
		});
	});
	describe('#where', function() {
		it('should set a condition', function() {
			var d = new Delete();
			var column = 'col';
			var value = 'val';
			var e = new Equal(column, value);
			assert.ok(d.where(e));
		});
	});
	describe('#and', function() {
		it('should append a condition', function() {
			var d = new Delete();
			var column1 = 'col1';
			var value1 = 'val1';
			var e1 = new Equal(column1, value1);
			var column2 = 'col2';
			var value2 = 'val2';
			var e2 = new Equal(column2, value2);
			assert.ok(d.where(e1).and(e2));
		});
	});
	describe('#toString', function() {
		it('should get string representation of the instance', function() {
			var database = 'database';
			var table = 'table';
			var f = new From();
			f.from(database, table);
			var d = new Delete();
			var column1 = 'col1';
			var value1 = 'val1';
			var e1 = new Equal(column1, value1);
			var column2 = 'col2';
			var value2 = 'val2';
			var e2 = new Equal(column2, value2);
			var to_string = [];
			to_string.push('DELETE');
			to_string.push(f.toString(true));
			to_string.push('WHERE');
			to_string.push(e1.toString());
			to_string.push('AND');
			to_string.push(e2.toString() + ';');
			assert.equal(d.from(database, table).where(e1).and(e2).toString(), to_string.join(' '));
		});
	});
});