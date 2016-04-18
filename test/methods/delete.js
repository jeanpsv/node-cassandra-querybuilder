process.env.NODE_ENV = 'test';

var reqlib = require('app-root-path').require;
var assert = require('assert');

var DELETE = reqlib('/methods/delete');
var OPERATOR = reqlib('/operators/operator');
var FROM = reqlib('/util/from');

describe('Delete', function() {
	describe('#constructor', function() {
		it('should create an instance of Delete', function() {
			var d = new DELETE();
			assert.ok(d);
		});
	});
	describe('#from', function() {
		it('should set database and table', function() {
			var d = new DELETE();
			assert.ok(d.from('database', 'table'));
		});
	});
	describe('#where', function() {
		it('should set a condition', function() {
			var d = new DELETE();
			var o = new OPERATOR();
			var column = 'col';
			var value = 'val';
			o.eq(column, value);
			assert.ok(d.where(o));
		});
	});
	describe('#and', function() {
		it('should append a condition', function() {
			var d = new DELETE();
			var o1 = new OPERATOR();
			var column1 = 'col1';
			var value1 = 'val1';
			o1.eq(column1, value1);
			var o2 = new OPERATOR();
			var column2 = 'col2';
			var value2 = 'val2';
			o2.eq(column2, value2);
			assert.ok(d.where(o1).and(o2));
		});
	});
	describe('#toString', function() {
		it('should get string representation of the instance', function() {
			var database = 'database';
			var table = 'table';
			var f = new FROM();
			f.from(database, table);
			var d = new DELETE();
			var o1 = new OPERATOR();
			var column1 = 'col1';
			var value1 = 'val1';
			o1.eq(column1, value1);
			var o2 = new OPERATOR();
			var column2 = 'col2';
			var value2 = 'val2';
			o2.eq(column2, value2);
			var to_string = [];
			to_string.push('DELETE');
			to_string.push(f.toString(true));
			to_string.push('WHERE');
			to_string.push(o1.toString());
			to_string.push('AND');
			to_string.push(o2.toString() + ';');
			assert.equal(d.from(database, table).where(o1).and(o2).toString(), to_string.join(' '));
		});
	});
});