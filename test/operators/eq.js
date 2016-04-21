process.env.NODE_ENV = 'test';

var assert = require('assert');
var Equal = require('../../operators/eq');

describe('Equal', function() {
	describe('#constructor', function() {
		it('should compile query', function() {
			var column = 'col';
			var operator = '=';
			var value = 'val';
			var eq = new Equal(column, value);
			assert.equal(eq._column, column);
			assert.equal(eq._operator, operator);
			assert.equal(eq._value, '\'' + value + '\'');
		});
	});
});