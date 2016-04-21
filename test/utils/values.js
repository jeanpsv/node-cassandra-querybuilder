process.env.NODE_ENV = 'test';

var assert = require('assert');
var Values = require('../../utils/values');
var UUID = require('../../utils/uuid');

describe('Values', function() {
	describe('#constructor', function() {
		it('should create an instance of Values', function() {
			var v = new Values();
			assert.ok(v);
		});
	});
	describe('#values', function() {
		it('should set values and get instance', function() {
			var v = new Values();
			assert.ok(v.values(['value1', 'value2']));
		});
		it('should get values separated by comma', function() {
			var value1 = 10;
			var value2 = 'value2';
			var v = new Values();
			v.values([value1, value2]);
			var expected = [value1, '\'' + value2 + '\''];
			assert.equal(v.values(), expected.join());
		});
	});
	describe('#toString', function() {
		it('should get string representation of the instance', function() {
			var value1 = 'value1';
			var value2 = 5;
			var value3 = new UUID('652f2270-fac4-11e5-bcc3-452e2b89ab68');
			var v = new Values();
			v.values([value1, value2, value3]);
			var expected = [];
			expected.push('\'' + value1 + '\'');
			expected.push(value2);
			expected.push(value3);
			assert.equal(v.toString(), expected.toString());
		});
	});
});