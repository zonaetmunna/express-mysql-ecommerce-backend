const db=require("../db/db");

class ProductModel {
  create(name, description, price, categoryId, brandId) {
    return new Promise((resolve, reject) => {
      const sql =
        "INSERT INTO products (name, description, price, category_id, brand_id) VALUES (?, ?, ?, ?, ?)";
      db.query(sql, [name, description, price, categoryId, brandId], (err, result) => {
        if (err) reject(err);
        resolve(result.insertId);
      });
    });
  }

  getAll() {
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM products";
      db.query(sql, (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  }

  getById(productId) {
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM products WHERE id = ?";
      db.query(sql, [productId], (err, result) => {
        if (err) reject(err);
        if (result.length === 0) {
          reject(new Error("Product not found"));
        } else {
          resolve(result[0]);
        }
      });
    });
  }

  // Add other methods for updating and deleting products
}

module.exports = new ProductModel();
