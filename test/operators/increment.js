process.env.NODE_ENV = 'test';

var assert = require('assert');
var Increment = require('../../operators/increment');

describe('Increment', function() {
	describe('#constructor', function() {
		it('should compile query', function() {
			var column = 'col';
			var increment = new Increment(column);
			assert.ok(increment);
		});
	});
	describe('#toString', function() {
		it('should get string representation of the instance', function() {
			var column = 'col';
			var operator = '+';
			var value = 1;
			var increment = new Increment(column);
			var to_string = [];
			to_string.push(column + ' = ' + column);
			to_string.push(operator);
			to_string.push(value);
			assert.equal(increment.toString(), to_string.join(' '));
		});
	});
});