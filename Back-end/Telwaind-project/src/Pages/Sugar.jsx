import React from 'react'
import Cards from '../component/Cards'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../component/Header';
import Footer from '../component/Footer';


const Sugar = () => {
  const opacColor ={backgroundColor: 'rgba(240, 240, 240, 0.1)'}
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get('http://localhost:3000/products');
      setProducts(res.data);
    };

    fetchProducts();
  }, []);
  return (
    <>
    <Header/>
  
    
    <section  className="bg-gray-900 text-gray-400 body-font">
<div className="container mx-auto py-12">
        <h2 className="text-3xl font-bold mb-6 text-center">Sugar</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      
        {products.map((product)=>(
  <Cards
  shadow={opacColor}
  key={product._id}
    name={product.name} 
    price={product.price}
    image={product.image} 
    
   />
   ))}
   {/* <Cards image="https://hips.hearstapps.com/hmg-prod/images/best-fragrance-free-beauty-647ded7201d3e.jpg" shadow={opacColor}/>
  <Cards image="https://www.freefromskincareawards.co.uk/wp-content/uploads/2023/06/Champ-and-RUps-Logos-Narrow-Landscape.png" shadow={opacColor}/>
  <Cards image="https://trynow.pk/wp-content/uploads/2024/02/Skincare-Shape-Up-Cream-Free-Sachet-Rs1000-min-min-min.webp" shadow={opacColor}/>      
  <Cards image="https://www.mycart.pk/media/catalog/product/cache/1/thumbnail/800x/17f82f742ffe127f42dca9de82fb58b1/_/0/_08471.jpg" shadow={opacColor}/>
  <Cards image="https://unblast.com/wp-content/uploads/2022/11/Skincare-Mockup-4.jpg" shadow={opacColor}/>
  <Cards image="https://png.pngtree.com/background/20230401/original/pngtree-skin-care-products-water-surface-flower-background-picture-image_2252617.jpg" shadow={opacColor}/>
  <Cards image="https://pinkcherry.pk/wp-content/uploads/2024/01/photo-output-8-scaled.jpeg" shadow={opacColor}/>
  <Cards image="https://mockuptree.com/wp-content/uploads/edd/2024/03/cosmetic-bottle-mockup-960x640.jpg" shadow={opacColor}/>
    */}
    </div>
  </div>
</section>
<Footer/>
    
    </>
  )
}

export default Sugar