const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

module.exports = (upload) => {
  // Define routes
  router.get('/', productController.getAllProducts);
  router.get('/:id', productController.getProductById);
  router.post('/', upload.single('image'), productController.createProduct); // Use multer middleware here
  router.put('/:id', upload.single('image'), productController.updateProduct); // Use multer middleware here
  router.delete('/:id', productController.deleteProduct);

  return router;
};




