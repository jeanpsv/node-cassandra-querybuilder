process.env.NODE_ENV = 'test';

var assert = require('assert');
var Equal = require('../../operators/eq');
var Where = require('../../conditions/where');

describe('Where', function() {
	describe('#constructor', function() {
		it('should create an instance of Where', function() {
			var w = new Where();
			assert.ok(w);
		});
	});
	describe('#where', function() {
		it('should insert clause', function() {
			var column = 'col';
			var operator = '=';
			var value = 'val';
			var w = new Where();
			var e = new Equal(column, value);
			w.where(e);
			var to_string = [];
			to_string.push('WHERE');
			to_string.push(e);
			assert.equal(w.toString(), to_string.join(' '));
		});
	});
	describe('#and', function() {
		it('should concat conditions', function() {
			var column1 = 'col1';
			var value1 = 'val1';
			var e1 = new Equal(column1, value1);
			var column2 = 'col2';
			var value2 = 'val2';
			var e2 = new Equal(column2, value2);
			var w = new Where();
			w.where(e1).and(e2);
			var to_string = [];
			to_string.push('WHERE');
			to_string.push(e1);
			to_string.push('AND');
			to_string.push(e2);
			assert.equal(w.toString(), to_string.join(' '));
		});
	});
	describe('#toString', function() {
		it('should get string representation of the instance', function() {
			var column1 = 'col1';
			var value1 = 'val1';
			var e1 = new Equal(column1, value1);
			var column2 = 'col2';
			var value2 = 'val2';
			var e2 = new Equal(column2, value2);
			var w = new Where();
			w.where(e1).and(e2);
			var to_string = [];
			to_string.push('WHERE');
			to_string.push(e1);
			to_string.push('AND');
			to_string.push(e2);
			assert.equal(w.toString(), to_string.join(' '));
		});
	});
});