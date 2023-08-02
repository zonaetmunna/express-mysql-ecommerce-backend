const brandModel = require("../model/brand.model");


exports.createBrand = async (req, res) => {
  const { name } = req.body;
  try {
    const brandId = await brandModel.create(name);
    res.status(201).json({ id: brandId, name });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllBrands = async (req, res) => {
  try {
    const brands = await brandModel.getAll();
    res.status(200).json(brands);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getBrandById = async (req, res) => {
  const brandId = req.params.id;
  try {
    const brand = await brandModel.getById(brandId);
    res.status(200).json(brand);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

// Add other methods for updating and deleting brands
