const db=require("../db/db");


class UserModel {
  create(name, email, password, role) {
    return new Promise((resolve, reject) => {
      const sql =
        "INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)";
      db.query(sql, [name, email, password, role], (err, result) => {
        if (err) reject(err);
        resolve(result.insertId);
      });
    });
  }

  getAll() {
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM users";
      db.query(sql, (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  }

  getById(userId) {
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM users WHERE id = ?";
      db.query(sql, [userId], (err, result) => {
        if (err) reject(err);
        if (result.length === 0) {
          reject(new Error("User not found"));
        } else {
          resolve(result[0]);
        }
      });
    });
  }

  // Add other methods for update and delete user
}

module.exports = new UserModel();
