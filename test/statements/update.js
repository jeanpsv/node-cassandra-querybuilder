process.env.NODE_ENV = 'test';

var assert = require('assert');

var Update = require('../../statements/update');
var Equal = require('../../operators/eq');
var From = require('../../utils/from');

describe('Update', function() {
	describe('#constructor', function() {
		it('should create an instance of Update', function() {
			var u = new Update();
			assert.ok(u);
		});
	});
	describe('#from', function() {
		it('should set database and table', function() {
			var u = new Update();
			assert.ok(u.from('database', 'table'));
		});
	});
	describe('#where', function() {
		it('should set a condition', function() {
			var u = new Update();
			var column = 'col';
			var value = 'val';
			var e = new Equal(column, value);
			assert.ok(u.where(e));
		});
	});
	describe('#and', function() {
		it('should append a condition', function() {
			var u = new Update();
			var column1 = 'col1';
			var value1 = 'val1';
			var e1 = new Equal(column1, value1);
			var column2 = 'col2';
			var value2 = 'val2';
			var e2 = new Equal(column2, value2);
			assert.ok(u.where(e1).and(e2));
		});
	});
	describe('#toString', function() {
		it('should get string representation of the instance', function() {
			var database = 'database';
			var table = 'table';
			var f = new From();
			f.from(database, table);
			var u = new Update();
			var column1 = 'col1';
			var value1 = 'val1';
			var e1 = new Equal(column1, value1);
			var column2 = 'col2';
			var value2 = 'val2';
			var e2 = new Equal(column2, value2);
			var column3 = 'col3';
			var value3 = 'val3';
			var e3 = new Equal(column3, value3);
			var column4 = 'col4';
			var value4 = 'val4';
			var e4 = new Equal(column4, value4);
			var to_string = [];
			to_string.push('UPDATE');
			to_string.push(f.toString(false));
			to_string.push('SET');
			to_string.push([e1.toString(), e2.toString()].join(', '));
			to_string.push('WHERE');
			to_string.push(e3.toString());
			to_string.push('AND');
			to_string.push(e4.toString() + ';');
			assert.equal(u.from(database, table).set(e1).set(e2).where(e3).and(e4).toString(), to_string.join(' '));
		});
	});
});