const mysql = require('mysql');
const config = require('./config.js'); // used for db connection

const connection = mysql.createConnection(config).connect((err) => {
  if (err) {
    console.log('Error connecting to MySQL: ', err)
  } else {
    console.log(`Connected to MySQL`)
  }
});

module.exports = connection;