process.env.NODE_ENV = 'test';

var assert = require('assert');
var Decrement = require('../../operators/decrement');

describe('Decrement', function() {
	describe('#constructor', function() {
		it('should compile query', function() {
			var column = 'col';
			var operator = '-';
			var decrement = new Decrement(column);
			assert.ok(decrement);
		});
	});
	describe('#toString', function() {
		it('should get string representation of the instance', function() {
			var column = 'col';
			var operator = '-';
			var value = 1;
			var decrement = new Decrement(column);
			var to_string = [];
			to_string.push(column + ' = ' + column);
			to_string.push(operator);
			to_string.push(value);
			assert.equal(decrement.toString(), to_string.join(' '));
		});
	});
});