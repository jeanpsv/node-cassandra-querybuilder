process.env.NODE_ENV = 'test';

var assert = require('assert');
var Add = require('../../operators/add');

describe('Add', function() {
	describe('#constructor', function() {
		it('should compile query', function() {
			var column = 'col';
			var operator = '+';
			var value = 'val';
			var add = new Add(column, value);
			assert.ok(add);
		});
	});
	describe('#toString', function() {
		it('should get string representation of the instance', function() {
			var column = 'col';
			var operator = '+';
			var value = 'val';
			var add = new Add(column, value);
			var to_string = [];
			to_string.push(column + ' = ' + column);
			to_string.push(operator);
			to_string.push('\'' + value + '\'');
			assert.equal(add.toString(), to_string.join(' '));
		});
	});
});