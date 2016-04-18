process.env.NODE_ENV = 'test';

var reqlib = require('app-root-path').require;
var assert = require('assert');

var SELECT = reqlib('/methods/select');
var OPERATOR = reqlib('/operators/operator');
var FROM = reqlib('/util/from');

describe('Select', function() {
	describe('#constructor', function() {
		it('should create an instance of Select', function() {
			var s = new SELECT();
			assert.ok(s);
		});
	});
	describe('#columns', function() {
		it('should set columns', function() {
			var s = new SELECT();
			assert.ok(s.columns(['col1', 'col2']));
		});
	});
	describe('#from', function() {
		it('should set database and table', function() {
			var s = new SELECT();
			assert.ok(s.from('database', 'table'));
		});
	});
	describe('#where', function() {
		it('should set a condition', function() {
			var s = new SELECT();
			var o = new OPERATOR();
			var column = 'col';
			var value = 'val';
			o.eq(column, value);
			assert.ok(s.where(o));
		});
	});
	describe('#and', function() {
		it('should append a condition', function() {
			var s = new SELECT();
			var o1 = new OPERATOR();
			var column1 = 'col1';
			var value1 = 'val1';
			o1.eq(column1, value1);
			var o2 = new OPERATOR();
			var column2 = 'col2';
			var value2 = 'val2';
			o2.eq(column2, value2);
			assert.ok(s.where(o1).and(o2));
		});
	});
	describe('#and', function() {
		it('should get string representation of the instance', function() {
			var columns = ['column1', 'column2'];
			var database = 'database';
			var table = 'table';
			var f = new FROM();
			f.from(database, table);
			var s = new SELECT();
			var o1 = new OPERATOR();
			var column1 = 'col1';
			var value1 = 'val1';
			o1.eq(column1, value1);
			var o2 = new OPERATOR();
			var column2 = 'col2';
			var value2 = 'val2';
			o2.eq(column2, value2);
			var to_string = [];
			to_string.push('SELECT');
			to_string.push(columns.join());
			to_string.push(f.toString());
			to_string.push('WHERE');
			to_string.push(o1.toString());
			to_string.push('AND');
			to_string.push(o2.toString() + ';');
			assert.equal(s.columns(columns).from(database, table).where(o1).and(o2).toString(), to_string.join(' '));
		});
	});
});