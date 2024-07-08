const express = require('express');
const { getHomepage, getH1text, getImgpage } = require('../controllers/homeController');
const router = express.Router();

// router/Method('/route', handler)

router.get('/', getHomepage);

router.get('/h1text', getH1text);

router.get('/homepage', getImgpage);

module.exports = router; //export default