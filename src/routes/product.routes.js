// routes/product.routes.js
const express = require("express");
const { getProductById, getAllProducts, createProduct } = require("../controller/product.controller");
const router = express.Router();

router.post("/", createProduct);
router.get("/", getAllProducts);
router.get("/:id", getProductById);
// Add routes for updating and deleting products

module.exports = router;
