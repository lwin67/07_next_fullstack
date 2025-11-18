const mysql = require('mysql2');
export const mysqlPool = mysql.createPool({
    host: 'localhost',
    user: 'u6703240',
    password: '6703240',
    database: 'u6703240_dit205'
});

