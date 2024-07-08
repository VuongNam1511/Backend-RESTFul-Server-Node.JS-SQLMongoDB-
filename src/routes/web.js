const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello World! after install nodemon')
})

router.get('/homepage', (req, res) => {
    // res.send('Chào mừng đến với trang củ của Vương Nam')
    res.render('sample.ejs')
})

router.get('/h1text', (req, res) => {
    res.send('<h1> Chào mừng đến với trang củ của Vương Nam <h1>')
})

module.exports = router; //export default