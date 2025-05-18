const mysql = require('mysql');
const { promisify } = require('util');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'your_username',
    password: 'your_password',
    database: 'your_database'
});

db.connect((err) => {
    if (err) throw err;
    console.log('MySQL connected...');
});

const query = promisify(db.query).bind(db);

const User = {
    create: async (email, password) => {
        const sql = 'INSERT INTO users (email, password) VALUES (?, ?)';
        const result = await query(sql, [email, password]);
        return result.insertId;
    },
    findByEmail: async (email) => {
        const sql = 'SELECT * FROM users WHERE email = ?';
        const result = await query(sql, [email]);
        return result[0];
    },
    // Additional methods can be added here for user-related operations
};

module.exports = User;