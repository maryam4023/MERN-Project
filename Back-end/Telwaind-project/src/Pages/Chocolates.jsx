import React from 'react'
import Cards from '../component/Cards'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../component/Header';
import Footer from '../component/Footer';


const Chocolates = () => {
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
        <h2 className="text-3xl font-bold mb-6 text-center">Chocolates</h2>
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
      
  {/* <Cards image="https://img.etimg.com/thumb/width-1600,height-900,imgsize-164838,resizemode-75,msid-106210151/industry/cons-products/fashion-/-cosmetics-/-jewellery/jewellery-consumption-to-grow-by-10-12-value-wise-in-fy24-amid-rise-in-gold-prices-report.jpg" shadow={opacColor}/>
  <Cards image="https://img.etimg.com/thumb/width-1600,height-900,imgsize-542100,resizemode-75,msid-88893196/wealth/spend/what-is-hallmark-unique-identification-huid-number-in-gold-jewellery.jpg" shadow={opacColor}/>
  <Cards image="https://img.etimg.com/thumb/width-1200,height-900,imgsize-2066943,resizemode-75,msid-109504032/industry/cons-products/fashion-/-cosmetics-/-jewellery/indian-jewellery-bigwigs-spread-their-wings-in-the-us-betting-on-the-diaspora.jpg" shadow={opacColor}/>      
  <Cards image="https://etimg.etb2bimg.com/thumb/msid-105058534,width-1200,resizemode-4/.jpg" shadow={opacColor}/>
  <Cards image="https://zeesy.pk/cdn/shop/products/KUNDAN-BRIDAL-0148.jpg?v=1674904867" shadow={opacColor}/>
  <Cards image="https://alita.pk/cdn/shop/articles/31DF71A4-61F1-4F21-A50A-5A55400EFCDC_550x.webp?v=1696490882" shadow={opacColor}/>
  <Cards image="https://www.jewellerystore.pk/wp-content/uploads/2023/11/JS-SET-2251-G-scaled.jpg" shadow={opacColor}/>
  <Cards image="https://ganapatijewellers.com/wp-content/uploads/2024/01/ganapati-jewellers-bridal-necklace-set.jpg" shadow={opacColor}/>
   */}
    </div>
  </div>
</section>



    <Footer/>
    </>
  )
}

export default Chocolates;