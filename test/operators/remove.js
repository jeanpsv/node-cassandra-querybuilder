process.env.NODE_ENV = 'test';

var assert = require('assert');
var Remove = require('../../operators/remove');

describe('Remove', function() {
	describe('#constructor', function() {
		it('should compile query', function() {
			var column = 'col';
			var operator = '-';
			var value = 'val';
			var remove = new Remove(column, value);
			assert.ok(remove);
		});
	});
	describe('#toString', function() {
		it('should get string representation of the instance', function() {
			var column = 'col';
			var operator = '-';
			var value = 'val';
			var remove = new Remove(column, value);
			var to_string = [];
			to_string.push(column + ' = ' + column);
			to_string.push(operator);
			to_string.push('\'' + value + '\'');
			assert.equal(remove.toString(), to_string.join(' '));
		});
	});
});