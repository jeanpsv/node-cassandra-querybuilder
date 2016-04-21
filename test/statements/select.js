process.env.NODE_ENV = 'test';

var assert = require('assert');

var Select = require('../../statements/select');
var Equal = require('../../operators/eq');
var From = require('../../utils/from');

describe('Select', function() {
	describe('#constructor', function() {
		it('should create an instance of Select', function() {
			var s = new Select();
			assert.ok(s);
		});
	});
	describe('#columns', function() {
		it('should set columns', function() {
			var s = new Select();
			assert.ok(s.columns(['col1', 'col2']));
		});
	});
	describe('#from', function() {
		it('should set database and table', function() {
			var s = new Select();
			assert.ok(s.from('database', 'table'));
		});
	});
	describe('#where', function() {
		it('should set a condition', function() {
			var s = new Select();
			var column = 'col';
			var value = 'val';
			var e = new Equal(column, value);
			assert.ok(s.where(e));
		});
	});
	describe('#and', function() {
		it('should append a condition', function() {
			var s = new Select();
			var column1 = 'col1';
			var value1 = 'val1';
			var e1 = new Equal(column1, value1);
			var column2 = 'col2';
			var value2 = 'val2';
			var e2 = new Equal(column2, value2);
			assert.ok(s.where(e1).and(e2));
		});
	});
	describe('#toString', function() {
		it('should get string representation of the instance', function() {
			var columns = ['column1', 'column2'];
			var database = 'database';
			var table = 'table';
			var f = new From();
			f.from(database, table);
			var s = new Select();
			var column1 = 'col1';
			var value1 = 'val1';
			var e1 = new Equal(column1, value1);
			var column2 = 'col2';
			var value2 = 'val2';
			var e2 = new Equal(column2, value2);
			var to_string = [];
			to_string.push('SELECT');
			to_string.push(columns.join());
			to_string.push(f.toString(true));
			to_string.push('WHERE');
			to_string.push(e1.toString());
			to_string.push('AND');
			to_string.push(e2.toString() + ';');
			assert.equal(s.columns(columns).from(database, table).where(e1).and(e2).toString(), to_string.join(' '));
		});
	});
});