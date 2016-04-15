process.env.NODE_ENV = 'test';

var reqlib = require('app-root-path').require;
var assert = require('assert');
var VALUES = reqlib('/util/values');

describe('Values', function() {
	describe('#constructor', function() {
		it('should create an instance of Values', function() {
			var v = new VALUES();
			assert.ok(v);
		});
		it('should set column and value', function() {
			var column = 'column';
			var value = 'value';
			var v = new VALUES(column, value);
			assert.ok(v);
		});
	});
	describe('#set', function() {
		it('should set column and value', function() {
			var column = 'col';
			var value = 'val';
			var v = new VALUES();
			v.set(column, value);
			assert.equal(v._columns[0], column);
			assert.equal(v._values[0], value);
		});
		it('should set column and value keeping object reference', function() {
			var column = 'col';
			var value = 'val';
			var v = new VALUES();
			v.set(column, value).set(column, value);
			assert.equal(v._columns[0], column);
			assert.equal(v._values[0], value);
			assert.equal(v._columns[1], column);
			assert.equal(v._values[1], value);
		});
	});
	describe('#columns', function() {
		it('should get columns separated by comma', function() {
			var column1 = 'column1';
			var column2 = 'column2';
			var v = new VALUES();
			v.set(column1, 'value1');
			v.set(column2, 'value2');
			var expected = [column1, column2];
			assert.equal(v.columns(), expected.join());
		});
		it('should set columns and get instance', function() {
			var v = new VALUES();
			assert.ok(v.columns(['column1', 'column2']));
		});
	});
	describe('#values', function() {
		it('should get values separated by comma', function() {
			var value1 = 'value1';
			var value2 = 'value2';
			var v = new VALUES();
			v.set('column1', value1);
			v.set('column2', value2);
			var expected = [value1, value2];
			assert.equal(v.values(), expected.join());
		});
		it('should set values and get instance', function() {
			var v = new VALUES();
			assert.ok(v.values(['value1', 'value2']));
		});
	});
	describe('#toString', function() {
		it('should get string representation of the instance', function() {
			var column1 = 'column1';
			var column2 = 'column2';
			var column3 = 'column3';
			var value1 = 'value1';
			var value2 = 'value2';
			var value3 = 'value3';
			var v = new VALUES(column1, value1);
			v.set(column2, value2).set(column3, value3);
			var expected = [];
			expected.push(column1 + ' = ' + value1);
			expected.push(column2 + ' = ' + value2);
			expected.push(column3 + ' = ' + value3);
			assert.equal(v.toString(), expected.toString());
		});
	});
});