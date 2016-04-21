process.env.NODE_ENV = 'test';

var assert = require('assert');
var Operator = require('../../operators/operator');
var UUID = require('../../utils/uuid');

describe('Operator', function() {
	describe('#constructor', function() {
		it('should create an instance of Operator', function() {
			var o = new Operator('column', 'operator', 'value');
			assert.ok(o);
		});
		it('should compile value types', function() {
			var column = 'col';
			var operator = '=';
			var value1 = 'val';
			var value2 = 5;
			var value3 = new UUID('652f2270-fac4-11e5-bcc3-452e2b89ab68');
			var o = new Operator(column, operator, value1);
			assert.equal(o._column, column);
			assert.equal(o._operator, operator);
			assert.equal(o._value, '\'' + value1 + '\'');
			o = new Operator(column, operator, value2);
			assert.equal(o._value, value2);
			o = new Operator(column, operator, value3);
			assert.equal(o._value, value3);

		});
	});
	describe('#toString', function() {
		it('should get string representation of the instance', function() {
			var column = 'col';
			var operator = '=';
			var value = 'val';
			var o = new Operator(column, operator, value);
			var to_string = [];
			to_string.push(column);
			to_string.push(operator);
			to_string.push('\'' + value + '\'');
			assert.equal(o.toString(), to_string.join(' '));
		});
	});
});