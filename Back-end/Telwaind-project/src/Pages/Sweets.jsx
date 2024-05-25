import React, { useState, useEffect } from 'react';
import Cards from '../component/Cards';
import axios from 'axios';
import Footer from '../component/Footer';
import Header from '../component/Header';

const Sweets = () => {
  const opacColor = { backgroundColor: 'rgba(240, 240, 240, 0.1)' };
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get('http://localhost:3000/products');
        console.log('Products fetched:', res.data); // Log the response data
        setProducts(res.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);



  return (
    <>
    <Header/>
    <section className="bg-gray-900 text-gray-400 body-font">
      <div className="container mx-auto py-12">
        <h2 className="text-3xl font-bold mb-6 text-center">Sweets</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Cards
              shadow={opacColor}
              key={product._id}
              name={product.name}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default Sweets;
