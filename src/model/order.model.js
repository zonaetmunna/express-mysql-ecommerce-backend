const db=require("../db/db");


class OrderModel {
  create(userId, productId, quantity) {
    return new Promise((resolve, reject) => {
      const sql =
        "INSERT INTO orders (user_id, product_id, quantity) VALUES (?, ?, ?)";
      db.query(sql, [userId, productId, quantity], (err, result) => {
        if (err) reject(err);
        resolve(result.insertId);
      });
    });
  }

  getAll() {
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM orders";
      db.query(sql, (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  }

  getById(orderId) {
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM orders WHERE id = ?";
      db.query(sql, [orderId], (err, result) => {
        if (err) reject(err);
        if (result.length === 0) {
          reject(new Error("Order not found"));
        } else {
          resolve(result[0]);
        }
      });
    });
  }

  // Add other methods for updating and deleting orders
}

module.exports = new OrderModel();
