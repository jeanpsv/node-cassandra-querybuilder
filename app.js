process.env.NODE_ENV = 'development';

global.reqlib = require('app-root-path').require;

/*----------  Module exports  ----------*/
module.exports = reqlib('/builder/querybuilder');