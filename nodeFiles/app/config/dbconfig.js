const mysql = require('mysql');

const pool = mysql.createPool({
    connectionlimit: 10,
    host: "localhost",
    user: "root",
    password: '',
    database: 'sweet_db'
});

module.exports = pool;

// Connecting the sweet_db to the server