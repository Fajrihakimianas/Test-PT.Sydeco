// require("dotenv").config();

// const { Pool, Client } = require("pg");

// // const connectionString = `postgressql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`;

// const pool = new Pool({
//   user:"postgres",
//   host:"localhost",
//   database:"User",
//   password:"12345"
// });

// module.exports = pool;

const mysql = require("mysql2");
require('dotenv').config();
const pool = mysql.createConnection({
  connectionLimit: 100,
  host: "localhost",
  user: "root",
  password: "usbw",
  database: "user",
  port: "3307",
});

module.exports = pool;