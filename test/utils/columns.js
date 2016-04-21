process.env.NODE_ENV = 'test';

var assert = require('assert');
var Columns = require('../../utils/columns');
var UUID = require('../../utils/uuid');

describe('Columns', function() {
	describe('#constructor', function() {
		it('should create an instance of Columns', function() {
			var v = new Columns();
			assert.ok(v);
		});
	});
	describe('#columns', function() {
		it('should get columns separated by comma', function() {
			var column1 = 'column1';
			var column2 = 'column2';
			var v = new Columns();
			v.columns([column1, column2]);
			var expected = [column1, column2];
			assert.equal(v.columns(), expected.join());
		});
		it('should set columns and get instance', function() {
			var v = new Columns();
			assert.ok(v.columns(['column1', 'column2']));
		});
	});
	describe('#toString', function() {
		it('should get string representation of the instance', function() {
			var column1 = 'column1';
			var column2 = 'column2';
			var column3 = 'column3';
			var v = new Columns();
			v.columns([column1, column2, column3]);
			var expected = [];
			expected.push(column1);
			expected.push(column2);
			expected.push(column3);
			assert.equal(v.toString(), expected.toString());
		});
	});
});