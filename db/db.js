const mysql = require('mysql2');
const dotenv = require('dotenv');

const connection = mysql.createConnection({
  host: 'yjo6uubt3u5c16az.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
  user: 'p9c2gniy7ql6zwug',
  password: 'xpmb9k19lk6e2lem',
  database: 'g0r057pl9c5bnjyg',
});

connection.promise()
  .query('SELECT 1')
  .then(() => {
    console.log('Connected to the database');
  })
  .catch((err) => {
    throw err;
  });

module.exports = connection;
