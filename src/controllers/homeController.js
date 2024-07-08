
const getHomepage = (req, res) => {
    // process data
    // call model
    res.send('Hello World! after install nodemon')
}
const getH1text = (req, res) => {
    res.send('<h1> Chào mừng đến với trang chủ của Vương Nam <h1>')
}

const getImgpage = (req, res) => {
    res.render('sample.ejs')
}

module.exports = {
    getHomepage, getH1text, getImgpage
}