const categoryModel = require("../model/category.model");


exports.createCategory = async (req, res) => {
  const { name } = req.body;
  try {
    const categoryId = await categoryModel.create(name);
    res.status(201).json({ id: categoryId, name });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllCategories = async (req, res) => {
  try {
    const categories = await categoryModel.getAll();
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getCategoryById = async (req, res) => {
  const categoryId = req.params.id;
  try {
    const category = await categoryModel.getById(categoryId);
    res.status(200).json(category);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

// Add other methods for updating and deleting categories
