process.env.NODE_ENV = 'test';

var reqlib = require('app-root-path').require;
var assert = require('assert');

var UUID = reqlib('/util/uuid');

describe('UUID', function() {
	describe('#constructor', function() {
		it('should create an instance of UUID', function() {
			var uuid = new UUID();
			assert.ok(uuid);
		});
	});
	describe('#uuid', function() {
		it('should set and get uuid', function() {
			var uuid = new UUID();
			var uuid_string = '652f2270-fac4-11e5-bcc3-452e2b89ab68';
			uuid.uuid(uuid_string);
			assert.equal(uuid.uuid(), uuid_string);
		});
	});
	describe('#toString', function() {
		it('should get string representation of the instance', function() {
			var uuid = new UUID();
			var uuid_string = '652f2270-fac4-11e5-bcc3-452e2b89ab68';
			uuid.uuid(uuid_string);
			assert.equal(uuid.toString(), uuid_string);
		});
	});
});