// controllers/productController.js
const Product = require('../models/product');

// Get all products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Fetch a single product by ID
exports.getProductById = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findById(id);
    if (!product) throw new Error('Product not found');

    res.json(product);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Create a product
exports.createProduct = async (req, res) => {
  try {
    const { name, price } = req.body;
    const image = req.file ? req.file.filename : undefined; // Check if file exists before accessing its properties
    const product = new Product({ name, price, image });
    const newProduct = await product.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a product
exports.updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;
  const image = req.file ? req.file.filename : undefined; // Check if file exists before accessing its properties

  try {
    const product = await Product.findById(id);
    if (!product) throw new Error('Product not found');

    product.name = name;
    product.price = price;
    if (image) product.image = image; // Update image only if provided
    await product.save();

    res.json(product);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Delete a product
exports.deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findByIdAndDelete(id);
    if (!product) throw new Error('Product not found');

    res.json({ message: 'Product deleted' });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
