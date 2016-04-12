process.NODE_ENV = 'test';

var reqlib = require('app-root-path').require;
var assert = require('assert');
var VALUES = reqlib('/util/values');

describe('Values', function() {
	describe('#constructor', function() {
		it('should create a instance of Values', function() {
			var v = new VALUES();
			assert.ok(v);
		});
		it('should set column and value', function() {
			var column = 'column';
			var value = 'value';
			var v = new VALUES(column, value);
			assert.ok(v);
		});
	});
	describe('#set', function() {
		it('should set column and value');
	});
	describe('#columns', function() {
		it('should get columns separated by comma');
		it('should set columns and get instance');
	});
	describe('#values', function() {
		it('should get values separated by comma');
		it('should set values and get instance');
	});
	describe('#toString', function() {
		it('should get string representation of the instance');
	});
});