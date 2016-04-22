process.env.NODE_ENV = 'test';

var assert = require('assert');

var QueryBuilder = require('../../builder/querybuilder');

describe('QueryBuilder', function() {
	describe('#constructor', function() {
		it('should create an instance of QueryBuilder', function() {
			var qb = new QueryBuilder();
			assert.ok(qb);
		});
	});
	describe('#select', function() {
		it('should create a select statement without where', function() {
			assert.equal(
				QueryBuilder
				.select()
				.columns(['col1', 'col2', 'col3'])
				.from('database', 'table')
				.toString(), 'SELECT col1,col2,col3 FROM database.table;'
			);
		});
		it('should create a select statement', function() {
			assert.equal(
				QueryBuilder
				.select()
				.columns(['col1', 'col2', 'col3'])
				.from('database', 'table')
				.where(QueryBuilder.eq('col4', new QueryBuilder.Types.UUID('652f2270-fac4-11e5-bcc3-452e2b89ab68')))
				.and(QueryBuilder.gte('col2', 'val2'))
				.toString(), 'SELECT col1,col2,col3 FROM database.table WHERE col4 = 652f2270-fac4-11e5-bcc3-452e2b89ab68 AND col2 >= \'val2\';'
			);
		});
		it('should create a select statement with limit', function() {
			assert.equal(
				QueryBuilder
				.select()
				.columns(['col1', 'col2', 'col3'])
				.from('database', 'table')
				.where(QueryBuilder.eq('col4', new QueryBuilder.Types.UUID('652f2270-fac4-11e5-bcc3-452e2b89ab68')))
				.and(QueryBuilder.gte('col2', 'val2'))
				.limit(10)
				.toString(), 'SELECT col1,col2,col3 FROM database.table WHERE col4 = 652f2270-fac4-11e5-bcc3-452e2b89ab68 AND col2 >= \'val2\' LIMIT 10;'
			);
		});
	});
	describe('#insert', function() {
		it('should create an insert statement', function() {
			assert.equal(QueryBuilder
				.insert()
				.from('database', 'table')
				.columns(['col1', 'col2'])
				.values(['val1', 5])
				.toString(), 'INSERT INTO database.table (col1,col2) VALUES (\'val1\',5);'
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
				.toString(), 'UPDATE database.table SET col1 = \'val1\', col2 = \'val2\' WHERE col3 = \'val3\' AND col2 < \'val2\';'
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
				.and(QueryBuilder.gt('col2', 5))
				.toString(), 'DELETE FROM engineminer.users WHERE col1 = \'val1\' AND col2 > 5;'
			);
		});
	});
});