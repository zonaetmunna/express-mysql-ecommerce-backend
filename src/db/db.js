const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "zonaet",
  password: "1234",
  database: "ecommercedb",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL database");
});

module.exports = connection;