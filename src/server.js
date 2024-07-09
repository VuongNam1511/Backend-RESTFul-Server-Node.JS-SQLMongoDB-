require('dotenv').config();
const express = require('express')  //commonjs
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');

const mysql = require('mysql2');

const { config } = require('dotenv');
const app = express()   //app express
const port = process.env.PORT || 8887;   //port  => hardcode .   uat .   prod
const hostname = process.env.HOST_NAME;

// config template engine
configViewEngine(app);

// khai bao routes
app.use('/', webRoutes);

// Test conection
// Create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3307, //default: 3306
    user: 'root', //default: empty
    password: '123456',
    database: 'hoidanit',
});

// A simple query

connection.query(
    'SELECT * FROM Users u',
    function (err, results, fields) {
        console.log(">>>results= ", results); // results contains rows returned by server
        console.log(">>>fields= ", fields); // fields contains extra meta data about results, if available
    }
);


app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})