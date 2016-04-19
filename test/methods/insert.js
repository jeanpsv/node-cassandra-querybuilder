process.env.NODE_ENV = 'test';

var assert = require('assert');

var INSERT = require('../../methods/insert');
var FROM = require('../../util/from');

describe('Insert', function() {
	describe('#constructor', function() {
		it('should create an instance of Insert', function() {
			var i = new INSERT();
			assert.ok(i);
		});
	});
	describe('#from', function() {
		it('should set database and table', function() {
			var i = new INSERT();
			assert.ok(i.from('database', 'table'));
		});
	});
	describe('#columns', function() {
		it('should set columns', function() {
			var i = new INSERT();
			assert.ok(i.columns(['col1', 'col2']));
		});
	});
	describe('#values', function() {
		it('should set values', function() {
			var i = new INSERT();
			assert.ok(i.values(['val1', 'val2']));
		});
	});
	describe('#toString', function() {
		it('should get string representation of the instance', function() {
			var database = 'database';
			var table = 'table';
			var f = new FROM();
			var columns = ['col1', 'col2'];
			var prepared_values = ['\'' + '?' + '\'', 10];
			var values = ['?', 10];
			f.from(database, table);
			var i = new INSERT();
			var to_string = [];
			to_string.push('INSERT INTO');
			to_string.push(f.toString(false));
			to_string.push('(' + columns.join() + ')');
			to_string.push('VALUES');
			to_string.push('(' + prepared_values.join() + ');');
			assert.equal(i.from(database, table).columns(columns).values(values).toString(), to_string.join(' '));
		});
	});
});