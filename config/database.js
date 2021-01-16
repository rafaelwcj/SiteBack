const mysql = require('mysql');

const conection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'site',
    connectionLimit: 100
});

module.exports = {
    database: conection
};