# node-cassandra-querybuilder
Apache Cassandra QueryBuilder for NodeJS

> this project provides a QueryBuilder for Apache Cassandra to NodeJS

## Installation
```bash
$ npm install --save node-cassandra-querybuilder
```

## Basic Usage
```javascript
var QueryBuilder = require('node-cassandra-querybuilder');
var query = QueryBuilder
        .select() // choose statement
        .columns(['*']) // select columns to be projected
        .from('db', 'table') // select database and table
        .where(QueryBuilder.eq('foo', 'bar')) // add condition
        .toString(); // compile and get query
console.log(query); // SELECT * FROM db.table WHERE foo = 'bar';
```

## Documentation
### Statements
* QueryBuilder.select() - call select statement
* QueryBuilder.insert() - call insert statement
* QueryBuilder.update() - call update statement
* QueryBuilder.delete() - call delete statement
```javascript
var select = QueryBuilder.select() //or...
QueryBuilder.select()...
```

### Operators
{column} - name of the column
{value} - value to be recorded
* QueryBuilder.eq({column}, {value}) - equal operator
* QueryBuilder.lt({column}, {value}) - less than operator
* QueryBuilder.lte({column}, {value}) - less than or equal operator
* QueryBuilder.gt({column}, {value}) - greater than operator
* QueryBuilder.gte({column}, {value}) - greater than or equal operator
```javascript
QueryBuilder.gte('size', 10) // size >= 10
```
**UUID type needs wrapper to works**
```javascript
QueryBuilder.eq('id', new QueryBuilder.Types.UUID('652f2270-fac4-11e5-bcc3-452e2b89ab68')) // id = 652f2270-fac4-11e5-bcc3-452e2b89ab68
```

### Conditions
{operator} - [Operators](#operators) type
* where({operator}) - insert condition
* and({operator}) - append condition
```javascript
...where(QueryBuilder.eq('foo', 'bar')) // WHERE foo = 'bar'
...where(QueryBuilder.eq('foo', 'bar')).and(QueryBuilder.lte('length', 10)) // WHERE foo = 'bar' AND length <= 10
```

### Utils
{database} - database name
{table} - table name
{columns} - array of columns' names
{values} - array of values to be recorded
{operator} - [Operators](#operators) type
* from([{database, }] {table}) - set database's name and/or table's name
* columns({columns}) - set columns
* values({values}) - set values
* set({operator}) - set assignment
```javascript
...from('database','table') // database.table
...from('table') // table
...columns(['id', 'name', 'age']) // (id,name,age)
...values([new QueryBuilder.Types.UUID('652f2270-fac4-11e5-bcc3-452e2b89ab68'),'foo',99]) // (652f2270-fac4-11e5-bcc3-452e2b89ab68, 'foo', 99)
...set(QueryBuilder.eq('name', 'foo')).set(QueryBuilder.eq('age', 99)) // name = 'foo', age = 99
```

### Examples
```javascript
// SELECT id,name,age FROM db.users WHERE id = 652f2270-fac4-11e5-bcc3-452e2b89ab68 AND age < 50;
QueryBuilder
        .select()
        .columns(['id', 'name', 'age'])
        .from('db', 'users')
        .where(QueryBuilder.eq('id', new QueryBuilder.Types.UUID('652f2270-fac4-11e5-bcc3-452e2b89ab68')))
        .and(QueryBuilder.lt('age', 50))
        .toString();

// INSERT INTO db.users (id,name,age) VALUES (652f2270-fac4-11e5-bcc3-452e2b89ab68,'foo',70);
QueryBuilder
        .insert()
        .from('db', 'users')
        .columns(['id', 'name', 'age'])
        .values([new QueryBuilder.Types.UUID('652f2270-fac4-11e5-bcc3-452e2b89ab68'), 'foo', 70])
        .toString();

// UPDATE db.users SET name = 'foo bar', age = 71 WHERE id = 652f2270-fac4-11e5-bcc3-452e2b89ab68;
QueryBuilder
        .update()
        .from('db', 'users')
        .set(QueryBuilder.eq('name', 'foo bar'))
        .set(QueryBuilder.eq('age', 71))
        .where(QueryBuilder.eq('id', new QueryBuilder.Types.UUID('652f2270-fac4-11e5-bcc3-452e2b89ab68')))
        .toString();

// DELETE FROM db.users WHERE id = 652f2270-fac4-11e5-bcc3-452e2b89ab68;
QueryBuilder
        .delete()
        .from('db', 'users')
        .where(QueryBuilder.eq('id', new QueryBuilder.Types.UUID('652f2270-fac4-11e5-bcc3-452e2b89ab68')))
        .toString();
```

### Tips
you can use statements as an attribute too (is better to make code conditions)
```javascript
function(age_value) {
	var select = QueryBuilder.select();
	select.columns(['id', 'name', 'age']).from('db', 'users')
        .where(QueryBuilder.eq('id', new QueryBuilder.Types.UUID('652f2270-fac4-11e5-bcc3-452e2b89ab68')))

	if (age_value) {
		select.and(QueryBuilder.lt('age', 50));
	}

	return select.toString();
};
```

## Contributors
[Jean Vasconcelos](https://github.com/jeanpsv)