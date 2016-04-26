process.env.NODE_ENV = 'test';

var assert = require('assert');
var Contains = require('../../operators/contains');

describe.only('Contains', function() {
	describe('#constructor', function() {
		it('should compile query', function() {
			var column = 'col';
			var operator = 'CONTAINS';
			var value = 'val';
			var contains = new Contains(column, value);
			assert.equal(contains._column, column);
			assert.equal(contains._operator, operator);
			assert.equal(contains._value, '\'' + value + '\'');
		});
	});
	describe('#toString', function() {
		it('should get string representation of the instance', function() {
			var column = 'col';
			var operator = 'CONTAINS';
			var value = 'val';
			var contains = new Contains(column, value);
			var to_string = [];
			to_string.push(column);
			to_string.push(operator);
			to_string.push('\'' + value + '\'');
			assert.equal(contains.toString(), to_string.join(' '));
		});
	});
});