const userModel = require("../model/user.model");


exports.createUser = async (req, res) => {
  const { name, email, password, role } = req.body;
  try {
    const userId = await userModel.create(name, email, password, role);
    res.status(201).json({ id: userId, name, email, role });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await userModel.getAll();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getUserById = async (req, res) => {
  const userId = req.params.id;
  try {
    const user = await userModel.getById(userId);
    res.status(200).json(user);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

// Add other controller functions for update and delete user
exports.updateUser = async (req, res) => {
    const userId = req.params.id;
    const { name, email, password } = req.body;
    try {
      const user = await UserModel.updateUser(userId, name, email, password);
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ message: "User not found" });
      }
    } catch (err) {
      res.status(500).json({ error: "Failed to update user" });
    }
  };
  
  exports.deleteUser = async (req, res) => {
    const userId = req.params.id;
    try {
      const result = await UserModel.deleteUser(userId);
      if (result) {
        res.status(200).json({ message: "User deleted successfully" });
      } else {
        res.status(404).json({ message: "User not found" });
      }
    } catch (err) {
      res.status(500).json({ error: "Failed to delete user" });
    }
  };