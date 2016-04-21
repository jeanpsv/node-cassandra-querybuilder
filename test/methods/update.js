process.env.NODE_ENV = 'test';

var assert = require('assert');

var UPDATE = require('../../methods/update');
var OPERATOR = require('../../operators/operator');
var FROM = require('../../utils/from');

describe('Update', function() {
	describe('#constructor', function() {
		it('should create an instance of Update', function() {
			var u = new UPDATE();
			assert.ok(u);
		});
	});
	describe('#from', function() {
		it('should set database and table', function() {
			var u = new UPDATE();
			assert.ok(u.from('database', 'table'));
		});
	});
	describe('#where', function() {
		it('should set a condition', function() {
			var u = new UPDATE();
			var o = new OPERATOR();
			var column = 'col';
			var value = 'val';
			o.eq(column, value);
			assert.ok(u.where(o));
		});
	});
	describe('#and', function() {
		it('should append a condition', function() {
			var u = new UPDATE();
			var o1 = new OPERATOR();
			var column1 = 'col1';
			var value1 = 'val1';
			o1.eq(column1, value1);
			var o2 = new OPERATOR();
			var column2 = 'col2';
			var value2 = 'val2';
			o2.eq(column2, value2);
			assert.ok(u.where(o1).and(o2));
		});
	});
	describe('#toString', function() {
		it('should get string representation of the instance', function() {
			var database = 'database';
			var table = 'table';
			var f = new FROM();
			f.from(database, table);
			var u = new UPDATE();
			var o1 = new OPERATOR();
			var column1 = 'col1';
			var value1 = 'val1';
			o1.eq(column1, value1);
			var o2 = new OPERATOR();
			var column2 = 'col2';
			var value2 = 'val2';
			o2.eq(column2, value2);
			var o3 = new OPERATOR();
			var column3 = 'col3';
			var value3 = 'val3';
			o3.eq(column3, value3);
			var o4 = new OPERATOR();
			var column4 = 'col4';
			var value4 = 'val4';
			o4.lt(column4, value4);
			var to_string = [];
			to_string.push('UPDATE');
			to_string.push(f.toString(false));
			to_string.push('SET');
			to_string.push([o1.toString(), o2.toString()].join(', '));
			to_string.push('WHERE');
			to_string.push(o3.toString());
			to_string.push('AND');
			to_string.push(o4.toString() + ';');
			assert.equal(u.from(database, table).set(o1).set(o2).where(o3).and(o4).toString(), to_string.join(' '));
		});
	});
});