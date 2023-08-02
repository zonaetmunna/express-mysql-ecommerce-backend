// routes/category.routes.js
const express = require("express");
const router = express.Router();
const { getCategoryById, getAllCategories, createCategory } = require("../controller/category.controller");

router.post("/", createCategory);
router.get("/", getAllCategories);
router.get("/:id", getCategoryById);
// Add routes for updating and deleting categories

module.exports = router;
