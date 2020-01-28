const mysql = require("mysql");
const dbConfig = require("C:/Users/hoped/Documents/Practicum/API/nodejs-express-mysql/app/config/db.config.js");

// Create a connection to the database
const connection = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
});

// open the MySQL connection
connection.connect(error => {
  //console.log("connection.connect from db.js");
  if (error) throw error;
  console.log('Successfully connected to the database.');
});

module.exports = connection;