// routes/store.routes.js
const express = require("express");
const { getStoreById, getAllStores, createStore } = require("../controller/store.controller");
const router = express.Router();

router.post("/", createStore);
router.get("/", getAllStores);
router.get("/:id", getStoreById);
// Add routes for updating and deleting stores

module.exports = router;
