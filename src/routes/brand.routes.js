// routes/brand.routes.js
const express = require("express");
const { createBrand, getAllBrands, getBrandById } = require("../controller/brand.controller");
const router = express.Router();

router.post("/", createBrand);
router.get("/", getAllBrands);
router.get("/:id", getBrandById);
// Add routes for updating and deleting brands

module.exports = router;
