process.env.NODE_ENV = 'test';

var assert = require('assert');

var QueryBuilder = require('../');

describe('QueryBuilder exports', function() {
	it('should get QueryBuilder reference', function() {
		assert.ok(new QueryBuilder());
	});
});