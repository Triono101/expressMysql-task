const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '@New1nsight',
    database: 'triono-cruds-v2'
});

module.exports = connection;