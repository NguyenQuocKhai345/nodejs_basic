const express = require('express')
const { getHomePage, getABC, postCreateUser,
    getCreaterUser, getUpdateUser, postUpdateUser,
    getDeleteUser, postDeleteUser } = require('../controller/homeController')
const router = express.Router();

// router.get('/', (req, res) => {
//     // res.send('Hello World');
//     res.render('sample.ejs');
// });

router.get('/', getHomePage);

router.get('/abc', getABC);

router.get('/html', (req, res) => {
    res.send('<h1>Check html</h1>');
});

router.get('/create-user', getCreaterUser);

router.post('/create', postCreateUser);

router.get('/update/:id', getUpdateUser);

router.post('/update/:id', postUpdateUser);

router.get('/delete/:id', getDeleteUser);

router.post('/delete/:id', postDeleteUser);

module.exports = router