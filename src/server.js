require('dotenv').config();
const express = require('express')  //commonjs
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');

const { config } = require('dotenv');
const app = express()   //app express
const port = process.env.PORT || 8887;   //port  => hardcode .   uat .   prod
const hostname = process.env.HOST_NAME;

// config template engine
configViewEngine(app);

// khai bao routes
app.use('/', webRoutes);

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})