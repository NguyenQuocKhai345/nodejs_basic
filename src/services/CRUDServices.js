const connection = require('../conflig/database');

const getAllUsers = async () => {
    let [results, fields] = await connection.query('SELECT * FROM Users');
    return results;
}

const getUserById = async (email, name, city) => {
    let [results, fields] = await connection.query(
        `INSERT INTO Users (email, name, city) VALUES (?, ?, ?)`, [email, name, city]
    );
}

const updateUserById = async (email, name, city, userId) => {
    let [results, fields] = await connection.query(
        `UPDATE Users SET email = ?, name = ?, city = ? WHERE id = ?`, [email, name, city, userId]
    );
}
module.exports = {
    getAllUsers,
    getUserById,
    updateUserById
}