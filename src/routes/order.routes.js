// routes/order.routes.js
const express = require("express");
const { getOrderById, getAllOrders, createOrder } = require("../controller/order.controller");
const router = express.Router();

router.post("/", createOrder);
router.get("/", getAllOrders);
router.get("/:id", getOrderById);
// Add routes for updating and deleting orders

module.exports = router;
