process.env.NODE_ENV = 'test';

var assert = require('assert');
var Append = require('../../operators/append');

describe('Append', function() {
	describe('#constructor', function() {
		it('should compile query', function() {
			var column = 'col';
			var operator = '+';
			var value = ['val'];
			var append = new Append(column, value);
			assert.ok(append);
		});
	});
	describe('#toString', function() {
		it('should get string representation of the instance', function() {
			var column = 'col';
			var operator = '+';
			var value = ['val1', 5];
			var append = new Append(column, value);
			var to_string = [];
			to_string.push(column + ' = ' + column);
			to_string.push(operator);
			to_string.push('[' + '\'' + value[0] + '\'' + ',' + value[1] + ']');
			assert.equal(append.toString(), to_string.join(' '));
		});
	});
});