const storeModel = require("../model/store.model");


exports.createStore = async (req, res) => {
  const { name, address } = req.body;
  try {
    const storeId = await storeModel.create(name, address);
    res.status(201).json({ id: storeId, name, address });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllStores = async (req, res) => {
  try {
    const stores = await storeModel.getAll();
    res.status(200).json(stores);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getStoreById = async (req, res) => {
  const storeId = req.params.id;
  try {
    const store = await storeModel.getById(storeId);
    res.status(200).json(store);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

// Add other methods for updating and deleting stores
