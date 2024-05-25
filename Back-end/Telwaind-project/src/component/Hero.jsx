import React from 'react'

const Hero = () => {
  return (
    <>
    
    <section className="text-gray-400 bg-gray-900 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
      <img className="object-cover object-center rounded" alt="hero" src="https://5.imimg.com/data5/SELLER/Default/2022/9/MQ/TA/TI/11241995/chocolate-flavour-500x500.jpg"/>
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-400"><h2>YUMMY GUMMY!!</h2>
        {/* <br className="hidden lg:inline-block"/> */}
      </h1>
      <p className="mb-8 leading-relaxed">•  Chocolate dates back to the ancient civilizations of the Maya and Aztecs, who consumed it as a bitter beverage made from cacao beans..<br/>
      Spanish explorers introduced chocolate to Europe in the 16th century, where it was initially enjoyed as a luxurious drink before evolving into the solid form we know today..<br/>
• Made with a high percentage of cocoa solids and cocoa butter, with little to no milk. Known for its rich, intense flavor and health benefits..<br/>
• Made from cocoa butter, sugar, and milk solids, but contains no cocoa solids, giving it a sweet and creamy flavor..</p>
<div className="flex justify-center">
  <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Explore More</button>
</div>

    </div>
  </div>
</section>

    </>
  )
}

export default Hero