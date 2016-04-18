process.env.NODE_ENV = 'test';

var reqlib = require('app-root-path').require;
var assert = require('assert');

var QueryBuilder = reqlib('/builder/querybuilder');

describe('QueryBuilder', function() {
	describe('#constructor', function() {
		it('should create an instance of QueryBuilder', function() {
			var qb = new QueryBuilder();
			assert.ok(qb);
		});
	});
	describe('#select', function() {
		it('should create a select statement', function() {
			assert.equal(
				QueryBuilder
				.select()
				.columns(['col1', 'col2', 'col3'])
				.from('database', 'table')
				.where(QueryBuilder.eq('col4', 'val4'))
				.and(QueryBuilder.gte('col2', 'val2'))
				.toString(), 'SELECT col1,col2,col3 FROM database.table WHERE col4 = val4 AND col2 >= val2;'
			);
		});
	});
	describe('#insert', function() {
		it('should create an insert statement', function() {
			assert.equal(QueryBuilder
				.insert()
				.from('database', 'table')
				.columns(['col1', 'col2'])
				.values(['val1', 'val2'])
				.toString(), 'INSERT INTO database.table (col1,col2) VALUES (val1,val2);'
			);
		});
	});
	describe('#update', function() {
		it('should create an update statement', function() {
			assert.equal(QueryBuilder
				.update()
				.from('database', 'table')
				.set(QueryBuilder.eq('col1', 'val1'))
				.set(QueryBuilder.eq('col2', 'val2'))
				.where(QueryBuilder.eq('col3', 'val3'))
				.and(QueryBuilder.lt('col2', 'val2'))
				.toString(), 'UPDATE database.table SET col1 = val1, col2 = val2 WHERE col3 = val3 AND col2 < val2;'
			);
		});
	});
	describe('#delete', function() {
		it('should create a delete statement', function() {
			assert.equal(
				QueryBuilder
				.delete()
				.from('engineminer', 'users')
				.where(QueryBuilder.eq('col1', 'val1'))
				.and(QueryBuilder.gt('col2', 'val2'))
				.toString(), 'DELETE FROM engineminer.users WHERE col1 = val1 AND col2 > val2;'
			);
		});
	});
});