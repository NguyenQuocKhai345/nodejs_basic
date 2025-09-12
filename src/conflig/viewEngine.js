const path = require('path');
const express = require('express');
const confligViewEngine = (app) => {
    // conflict template engine
    // thay __dirname = ./src vi __dirname se lay file hien tai lam duong dan
    app.set('views', path.join('./src', 'views')); // set folder views
    app.set('view engine', 'ejs'); // set view engine


    //conflig static file
    app.use(express.static(path.join('./src', 'public'))); // set folder public


}
module.exports = confligViewEngine;