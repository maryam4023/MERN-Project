import React, { useState, useEffect } from 'react';
import { Link} from 'react-router-dom';
import axios from 'axios';

const ProductList = () => {

  const [products, setProducts] = useState([]);
  // const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get('http://localhost:3000/products');
      console.log(res.data)
      setProducts(res.data);
    };
    fetchProducts();
  }, []);
  // const loadAgain = () => {
  //   axios.get('http://localhost:3000/products')
  //   .then( () => {
  //     navigate('/dashboard/ProductsList')
  //   })
  // }
  // loadAgain()

  const deleteProduct = async (id) => {
    await axios.delete(`http://localhost:3000/products/${id}`);
    setProducts(products.filter(product => product._id !== id));
    
  };



  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Product List</h1>
        <Link to="/dashboard/products" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Add Product
        </Link>
      </div>
      <section  >
<div className="container mx-auto py-12">
       
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <div key={product._id} className="bg-white p-5 rounded shadow-md">
            <h2 className="text-xl font-bold">{product.name}</h2>
            <p className="text-gray-700">${product.price}</p>
            {product.image && (
              <img
                src={`Images/${product.image}`} 
                alt={product.name}
                className="w-full h-48 object-cover mt-4"
              />
            )}
            <div className="flex justify-end mt-4">
              <Link to={`edit/${product._id}`} className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mr-2">
                Edit
              </Link>
              <button onClick={() => deleteProduct(product._id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
  </div>
</section>

    </div>
  );
};

export default ProductList;
