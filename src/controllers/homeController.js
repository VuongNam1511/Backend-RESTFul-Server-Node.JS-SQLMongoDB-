const connection = require('../config/database');

const getHomepage = (req, res) => {
    // process data
    // call model
    let users = [];

    connection.query(
        'SELECT * FROM Users u',
        function (err, results, fields) {
            users = results;
            console.log(">>>results home page= ", results); // results contains rows returned by server

            // console.log(">>>check users: ", users)
            res.send(JSON.stringify(users))
        }
    );


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