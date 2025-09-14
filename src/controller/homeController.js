const connection = require('../conflig/database');
const { getAllUsers, getUserById, updateUserById } = require('../services/CRUDServices');

const getHomePage = async (req, res) => {
    let results = await getAllUsers();
    console.log('>>Checkresults :', results); // results contains rows returned by server
    return res.render('home.ejs', { listUser: results });

}

const getABC = (req, res) => {
    return res.send('Hello World from controller abc');
}

const postCreateUser = async (req, res) => {
    // kết nối data base động theo call back
    // let { email, name, city } = req.body;
    // connection.query(
    //     `INSERT INTO Users (email, name, city)
    // VALUES (?, ?, ?);`,
    //     [email, name, city], // lấy từ form
    //     function (err, results) {
    //         console.log('>>Checkresults :', results); // results contains rows returned by server
    //         //console.log('>>Checkfields :', fields); // fields contains extra meta data about results, if available
    //     }
    // )
    // return res.send('Post request to create new user from controller');



    // kết nối theo async await: tường minh hơn
    let { email, name, city } = req.body;
    // let [results, fields] = await connection.query(
    //     `INSERT INTO Users (email, name, city) VALUES (?, ?, ?)`, [email, name, city]
    // );
    await getUserById(email, name, city);
    console.log('>>check results: ', results)
    res.send('Create user success')
}

const postUpdateUser = async (req, res) => {
    // kết nối theo async await: tường minh hơn
    let { email, name, city, userId } = req.body;
    // let [results, fields] = await connection.query(
    //     `UPDATE Users SET email = ?, name = ?, city = ? WHERE id = ?`, [email, name, city, userId]
    // );
    //console.log('>>check results: ', results)
    await updateUserById(email, name, city, userId);
    res.redirect('/'); //quay về trang home sau khi update xong
}


const getCreaterUser = (req, res) => {
    return res.render('create.ejs')
}

const getUpdateUser = async (req, res) => {
    //console.log('>>>Check req.params:', req.params);
    let userId = req.params.id;
    let [results, fields] = await connection.query('SELECT * FROM Users WHERE id = ?', [userId]);
    //console.log('>>>Check user:', results);
    let user = results && results.length > 0 ? results[0] : {};
    return res.render('edit.ejs', { userEdit: user });

}


const getDeleteUser = async (req, res) => {
    //console.log('>>>Check req.params:', req.params);
    let userId = req.params.id;
    let [results, fields] = await connection.query('SELECT * FROM Users WHERE id = ?', [userId]);
    let user = results && results.length > 0 ? results[0] : {};
    return res.render('delete.ejs', { userDelete: user });
}


const postDeleteUser = async (req, res) => {
    let [results, fields] = await connection.query(
        'DELETE FROM Users WHERE id = ?', [req.params.id]);
    console.log('>>Check id: ', req.params.id)
    res.redirect('/'); //quay về trang home sau khi delete xong
}



module.exports = {
    getHomePage,
    getABC,
    postCreateUser,
    getCreaterUser,
    getUpdateUser,
    postUpdateUser,
    getDeleteUser,
    postDeleteUser
}