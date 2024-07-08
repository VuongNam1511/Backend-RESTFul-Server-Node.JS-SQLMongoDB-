const express = require('express')  //commonjs
const path = require('path');
require('dotenv').config();
// import enxpress from 'express';//es modules


const app = express()   //app express
const port = process.env.PORT || 8887;   //port  => hardcode .   uat .   prod
const hostname = process.env.HOST_NAME;

//config template engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

// Khai báo route
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/homepage', (req, res) => {
    // res.send('Chào mừng đến với trang củ của Vương Nam')
    res.render('sample.ejs')
})

app.get('/h1text', (req, res) => {
    res.send('<h1> Chào mừng đến với trang củ của Vương Nam <h1>')
})

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})