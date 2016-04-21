process.env.NODE_ENV = 'test';

var assert = require('assert');
var GreaterThanOrEqual = require('../../operators/gte');

describe('GreaterThanOrEqual', function() {
	describe('#constructor', function() {
		it('should compile query', function() {
			var column = 'col';
			var operator = '>=';
			var value = 'val';
			var eq = new GreaterThanOrEqual(column, value);
			assert.equal(eq._column, column);
			assert.equal(eq._operator, operator);
			assert.equal(eq._value, '\'' + value + '\'');
		});
	});
});