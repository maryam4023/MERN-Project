import React from 'react'
import { NavLink } from 'react-router-dom'


const Header = () => {
  const opacColor ={backgroundColor: 'rgba(240, 240, 240, 0.1)'}
  return (
    <>
    {/*className="w-10 h-10 p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24"*/}
    
    <header className="text-gray-400 bg-gray-900 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center" style={opacColor}>
    <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
  <path d="M12 2l-8 5v11a2 2 0 002 2h12a2 2 0 002-2V7l-8-5zm0 0v6m0 0V2m0 6h3m-3 0H9m6 0h3"></path>
</svg>

    

      <span className="ml-3 text-xl">SUgiee</span>
    </a>
    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
      <NavLink to="/" className="mr-5 hover:text-white">Home</NavLink>
      <NavLink to="/about" className="mr-5 hover:text-white">About</NavLink>
      {/* <NavLink to="/Chocolate" className="mr-5 hover:text-white">Chocolate</NavLink>
      <NavLink to="/Sugar" className="mr-5 hover:text-white">Sugar</NavLink> */}
      <NavLink to="/Sweets" className="mr-5 hover:text-white">Sweets</NavLink>
      <NavLink to="/contact" className="mr-5 hover:text-white">Contact</NavLink>
    </nav>
    <NavLink to="/login" className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">Log In
      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </NavLink>
    
  </div>
</header>
    
    </>
  )
}

export default Header