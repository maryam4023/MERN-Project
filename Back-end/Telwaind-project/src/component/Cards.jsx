import React from 'react'

const Cards = ({image,shadow,price,name}) => {
  return (
    <>
    
    <div className="shadow-md rounded-lg overflow-hidden" style={shadow}>
        <a className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={`Images/${image}`}/>
        </a>
        <div className="mt-4 ml-2">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 className="text-white title-font text-lg font-medium">{name}</h2>
          <p className="mt-1">${price}</p>
        </div>
      </div>
    
    </>
  )
}

export default Cards