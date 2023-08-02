const db=require("../db/db");


class CategoryModel {
  create(name) {
    return new Promise((resolve, reject) => {
      const sql = "INSERT INTO categories (name) VALUES (?)";
      db.query(sql, [name], (err, result) => {
        if (err) reject(err);
        resolve(result.insertId);
      });
    });
  }

  getAll() {
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM categories";
      db.query(sql, (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  }

  getById(categoryId) {
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM categories WHERE id = ?";
      db.query(sql, [categoryId], (err, result) => {
        if (err) reject(err);
        if (result.length === 0) {
          reject(new Error("Category not found"));
        } else {
          resolve(result[0]);
        }
      });
    });
  }

  // Add other methods for updating and deleting categories
}

module.exports = new CategoryModel();
