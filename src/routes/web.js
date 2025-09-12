const express = require('express')
const { getHomePage, getABC } = require('../controller/homeController')
const router = express.Router();

router.get('/', (req, res) => {
    // res.send('Hello World');
    res.render('sample.ejs');
});

router.get('/home', getHomePage);

router.get('/abc', getABC);

router.get('/html', (req, res) => {
    res.send('<h1>Check html</h1>');
});

module.exports = router