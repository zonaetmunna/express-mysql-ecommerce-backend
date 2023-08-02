const db=require("../db/db");


class StoreModel {
  create(name, address) {
    return new Promise((resolve, reject) => {
      const sql = "INSERT INTO stores (name, address) VALUES (?, ?)";
      db.query(sql, [name, address], (err, result) => {
        if (err) reject(err);
        resolve(result.insertId);
      });
    });
  }

  getAll() {
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM stores";
      db.query(sql, (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  }

  getById(storeId) {
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM stores WHERE id = ?";
      db.query(sql, [storeId], (err, result) => {
        if (err) reject(err);
        if (result.length === 0) {
          reject(new Error("Store not found"));
        } else {
          resolve(result[0]);
        }
      });
    });
  }

  // Add other methods for updating and deleting stores
}

module.exports = new StoreModel();
