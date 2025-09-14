// goi express
const express = require('express');
const app = express(); // app express

// goi view engine
const confligViewEngine = require('./conflig/viewEngine');
const webRoutes = require('./routes/web')
const connection = require('./conflig/database');
require('dotenv').config(); // goi dotenv

//conflig req.body
app.use(express.urlencoded({ extended: true })); // for form data
app.use(express.json()); // for json

// const port = 3000; // port
// const hostname = 'localhost';
const port = process.env.PORT || 8000; // port
const hostname = process.env.HOST_NAME || 'localhost';
//console.log(process.env.PORT); // in ra port

// goi view engine
confligViewEngine(app);


// khai bao route

app.use('/', webRoutes)

//test connect mysql


// connection.query(
//     'Select * from Users u',
//     function (err, results, fields) {
//         console.log('>>Checkresults :', results); // results contains rows returned by server
//         //console.log('>>Checkfields :', fields); // fields contains extra meta data about results, if available
//     }
// )

// goi server 
app.listen(port, hostname, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
