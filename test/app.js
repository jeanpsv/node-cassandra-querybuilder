process.env.NODE_ENV = 'test';

var reqlib = require('app-root-path').require;
var assert = require('assert');

var QueryBuilder = reqlib('/');

describe('QueryBuilder exports', function() {
	it('should get QueryBuilder reference', function() {
		assert.ok(new QueryBuilder());
	});
});