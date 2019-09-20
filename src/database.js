const mysql = require('mysql');



const mysqlConnection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1",
    database: "northwind",
    port: "3306"
});

mysqlConnection.connect(function (err) {
    if (err) {
        console.error(err);
        return;
    } else {
        console.log('db is connected');
    }
});

module.exports = mysqlConnection;