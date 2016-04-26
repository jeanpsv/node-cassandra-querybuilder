process.env.NODE_ENV = 'test';

var assert = require('assert');
var ContainsKey = require('../../operators/containskey');

describe('ContainsKey', function() {
	describe('#constructor', function() {
		it('should compile query', function() {
			var column = 'col';
			var operator = 'CONTAINS KEY';
			var value = 'val';
			var containskey = new ContainsKey(column, value);
			assert.equal(containskey._column, column);
			assert.equal(containskey._operator, operator);
			assert.equal(containskey._value, '\'' + value + '\'');
		});
	});
	describe('#toString', function() {
		it('should get string representation of the instance', function() {
			var column = 'col';
			var operator = 'CONTAINS KEY';
			var value = 'val';
			var containskey = new ContainsKey(column, value);
			var to_string = [];
			to_string.push(column);
			to_string.push(operator);
			to_string.push('\'' + value + '\'');
			assert.equal(containskey.toString(), to_string.join(' '));
		});
	});
});