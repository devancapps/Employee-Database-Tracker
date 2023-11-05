const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'your_username',
  password: 'your_password',
  database: 'your_database',
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
