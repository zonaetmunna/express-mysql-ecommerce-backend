const db=require("../db/db");


class BrandModel {
  create(name) {
    return new Promise((resolve, reject) => {
      const sql = "INSERT INTO brands (name) VALUES (?)";
      db.query(sql, [name], (err, result) => {
        if (err) reject(err);
        resolve(result.insertId);
      });
    });
  }

  getAll() {
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM brands";
      db.query(sql, (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  }

  getById(brandId) {
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM brands WHERE id = ?";
      db.query(sql, [brandId], (err, result) => {
        if (err) reject(err);
        if (result.length === 0) {
          reject(new Error("Brand not found"));
        } else {
          resolve(result[0]);
        }
      });
    });
  }

  // Add other methods for updating and deleting brands
}

module.exports = new BrandModel();
