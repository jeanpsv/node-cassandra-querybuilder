process.env.NODE_ENV = 'test';

var reqlib = require('app-root-path').require;
var assert = require('assert');
var OPERATOR = reqlib('/operators/operator');
var UUID = reqlib('/util/uuid');

describe('Operator', function() {
	describe('#constructor', function() {
		it('should create an instance of Operator', function() {
			var o = new OPERATOR();
			assert.ok(o);
		});
	});
	describe('#compile', function() {
		it('should compile', function() {
			var column = 'col';
			var operator = '=';
			var value1 = 'val';
			var value2 = 5;
			var value3 = new UUID('652f2270-fac4-11e5-bcc3-452e2b89ab68');
			var o = new OPERATOR();
			o.compile(column, operator, value1);
			assert.equal(o._column, column);
			assert.equal(o._operator, operator);
			assert.equal(o._value, '\'' + value1 + '\'');
			o.compile(column, operator, value2);
			assert.equal(o._value, value2);
			o.compile(column, operator, value3);
			assert.equal(o._value, value3);

		});
	});
	describe('#eq', function() {
		it('should compile equal query', function() {
			var column = 'col';
			var operator = '=';
			var value = 'val';
			var o = new OPERATOR();
			o.eq(column, value);
			assert.equal(o._column, column);
			assert.equal(o._operator, operator);
			assert.equal(o._value, '\'' + value + '\'');
		});
	});
	describe('#lt', function() {
		it('should compile less than query', function() {
			var column = 'col';
			var operator = '<';
			var value = 'val';
			var o = new OPERATOR();
			o.lt(column, value);
			assert.equal(o._column, column);
			assert.equal(o._operator, operator);
			assert.equal(o._value, '\'' + value + '\'');
		});
	});
	describe('#lte', function() {
		it('should compile less than or equal query', function() {
			var column = 'col';
			var operator = '<=';
			var value = 'val';
			var o = new OPERATOR();
			o.lte(column, value);
			assert.equal(o._column, column);
			assert.equal(o._operator, operator);
			assert.equal(o._value, '\'' + value + '\'');
		});
	});
	describe('#gt', function() {
		it('should compile greater than query', function() {
			var column = 'col';
			var operator = '>';
			var value = 'val';
			var o = new OPERATOR();
			o.gt(column, value);
			assert.equal(o._column, column);
			assert.equal(o._operator, operator);
			assert.equal(o._value, '\'' + value + '\'');
		});
	});
	describe('#gte', function() {
		it('should compile greater than or equal query', function() {
			var column = 'col';
			var operator = '>=';
			var value = 'val';
			var o = new OPERATOR();
			o.gte(column, value);
			assert.equal(o._column, column);
			assert.equal(o._operator, operator);
			assert.equal(o._value, '\'' + value + '\'');
		});
	});
	describe('#toString', function() {
		it('should get string representation of the instance', function() {
			var column = 'col';
			var operator = '=';
			var value = 'val';
			var o = new OPERATOR();
			o.eq(column, value);
			var to_string = [];
			to_string.push(column);
			to_string.push(operator);
			to_string.push('\'' + value + '\'');
			assert.equal(o.toString(), to_string.join(' '));
		});
	});
});