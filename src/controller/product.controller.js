const productModel = require("../model/product.model");


exports.createProduct = async (req, res) => {
  const { name, description, price, categoryId, brandId } = req.body;
  try {
    const productId = await productModel.create(name, description, price, categoryId, brandId);
    res.status(201).json({ id: productId, name, description, price, categoryId, brandId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllProducts = async (req, res) => {
  try {
    const products = await productModel.getAll();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getProductById = async (req, res) => {
  const productId = req.params.id;
  try {
    const product = await productModel.getById(productId);
    res.status(200).json(product);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

// Add other methods for updating and deleting products
