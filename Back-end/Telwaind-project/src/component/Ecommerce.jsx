import React from 'react'

const Ecommerce = () => {


   const opacColor ={backgroundColor: 'rgba(240, 240, 240, 0.1)'}
  return (
   <>
   
  
<section  className="bg-gray-900 text-gray-400 body-font">
<div className="container mx-auto py-12">
        <h2 className="text-3xl font-bold mb-6 text-center">Best Sellers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="shadow-md rounded-lg overflow-hidden" style={opacColor}>
                <img src="https://www.joelenton.com/wp-content/uploads/2020/01/Creative-Chocolate-Photography-4.jpg.webp" alt="Product 1" className="w-full h-64 object-cover object-center"/>
                <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">Product 1</h3>
                    <p className="text-gray-600">$99.99</p>
                    <button className="mt-4 bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600">Add to Cart</button>
                </div>
            </div>
            
            <div className="shadow-md rounded-lg overflow-hidden" style={opacColor}>
                <img src="https://d3i6fh83elv35t.cloudfront.net/static/2018/07/RTX6CQP6-1024x688.jpg" alt="Product 2" className="w-full h-64 object-cover object-center"/>
                <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">Product 2</h3>
                    <p className="text-gray-600">$79.99</p>
                    <button className="mt-4 bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600">Add to Cart</button>
                </div>
            </div>
            
            <div className="shadow-md rounded-lg overflow-hidden" style={opacColor}>
                <img src="https://images.squarespace-cdn.com/content/v1/55f355aae4b0945ca589b919/1521265524697-50BIXG6FYZ6UK0AH6BKV/Ferrero_Rocher_Easter.jpg?format=1500w" alt="Product 3" className="w-full h-64 object-cover object-center"/>
                <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">Product 3</h3>
                    <p className="text-gray-600">$129.99</p>
                    <button className="mt-4 bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600">Add to Cart</button>
                </div>
            </div>
            
            <div className="shadow-md rounded-lg overflow-hidden" style={opacColor}>
                <img src="https://t3.ftcdn.net/jpg/06/11/39/96/360_F_611399693_RO3but8YAYEz1c9Sh7MfrhuUNSAxv1IY.jpg" alt="Product 4" className="w-full h-64 object-cover object-center"/>
                <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">Product 4</h3>
                    <p className="text-gray-600">$149.99</p>
                    <button className="mt-4 bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600">Add to Cart</button>
                </div>
            </div>
        </div>
    </div>
</section>
    



   
   </>
  )
}

export default Ecommerce