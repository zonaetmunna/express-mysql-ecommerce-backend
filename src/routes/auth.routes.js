// routes/user.routes.js
const express = require("express");
const { createUser, deleteUser, updateUser, getUserById, getAllUsers } = require("../controller/user.controller");
const router = express.Router();


router.post("/users", createUser);
router.get("/users", getAllUsers);
router.get("/users/:id", getUserById);
router.put("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

module.exports = router;
