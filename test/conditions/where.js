process.env.NODE_ENV = 'test';

var assert = require('assert');
var OPERATOR = require('../../operators/operator');
var WHERE = require('../../conditions/where');

describe('Where', function() {
	describe('#constructor', function() {
		it('should create an instance of Where', function() {
			var w = new WHERE();
			assert.ok(w);
		});
	});
	describe('#where', function() {
		it('should insert clause', function() {
			var o = new OPERATOR();
			var column = 'col';
			var operator = '=';
			var value = 'val';
			o.eq(column, value);
			var w = new WHERE();
			w.where(o);
			var to_string = [];
			to_string.push('WHERE');
			to_string.push(o);
			assert.equal(w.toString(), to_string.join(' '));
		});
	});
	describe('#and', function() {
		it('should concat conditions', function() {
			var o1 = new OPERATOR();
			var column1 = 'col1';
			var value1 = 'val1';
			o1.eq(column1, value1);
			var o2 = new OPERATOR();
			var column2 = 'col2';
			var value2 = 'val2';
			o2.eq(column2, value2);
			var w = new WHERE();
			w.where(o1).and(o2);
			var to_string = [];
			to_string.push('WHERE');
			to_string.push(o1);
			to_string.push('AND');
			to_string.push(o2);
			assert.equal(w.toString(), to_string.join(' '));
		});
	});
	describe('#toString', function() {
		it('should get string representation of the instance', function() {
			var o1 = new OPERATOR();
			var column1 = 'col1';
			var value1 = 'val1';
			o1.eq(column1, value1);
			var o2 = new OPERATOR();
			var column2 = 'col2';
			var value2 = 'val2';
			o2.eq(column2, value2);
			var w = new WHERE();
			w.where(o1).and(o2);
			var to_string = [];
			to_string.push('WHERE');
			to_string.push(o1);
			to_string.push('AND');
			to_string.push(o2);
			assert.equal(w.toString(), to_string.join(' '));
		});
	});
});