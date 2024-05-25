import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditProduct = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await axios.get(`http://localhost:3000/products/${id}`);
      setName(res.data.name);
      setPrice(res.data.price);
      setImage(res.data.image);
    };
    fetchProduct();
  }, [id]);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('price', price);
    if (image) {
      formData.append('image', image);
    }

    await axios.put(`http://localhost:3000/products/${id}`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });

    navigate('/dashboard');
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-8 rounded shadow-md">
      <h1 className="text-2xl font-bold mb-4">Update Product</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Price</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Image</label>
          <input
            type="file"
            onChange={handleImageChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Update Product
        </button>
      </form>
    </div>
  );
};

export default EditProduct;
