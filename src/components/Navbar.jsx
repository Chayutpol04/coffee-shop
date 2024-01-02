import {Link} from 'react-router-dom'
import React, { useState } from 'react';
import logostarbug from '../imgs/etc/logostarbug.jpg'
import logobug from '../imgs/etc/logobug.png'
function Navbar() {
    
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <>
        <nav className="bg-coffeecolor2 p-6 mx-auto w-full">
              <div className="container mx-auto flex items-center justify-between">
                    <div className='flex flex-row items-center text-3xl space-x-8 font-bold'>
                      <img src={logobug} alt=""  width={60}/>
                      <a href="#" className=' hover:text-red hidden lg:block'>
                                  STARBUG
                      </a>
                    </div>
                  <div className="hidden space-x-4 lg:flex text-3xl  font-bold"> 
                    <Link to="/" className='hover:text-coffeecolor1 hover:underline'>Home</Link>
                    <Link to="/Menu" className='hover:text-coffeecolor1 hover:underline'>Menu</Link>
                    <Link to="/Merchendise" className='hover:text-coffeecolor1 hover:underline'>Merchendise</Link>
                    <Link to="/AboutUs" className='hover:text-coffeecolor1 hover:underline'>About Us</Link>
                  </div>
                  <div className="lg:hidden">
                    <button
                      onClick={toggleMobileMenu}
                      className={`text-white focus:outline-none ${isMobileMenuOpen ? 'rotate-90 duration-500 ease-in-out' : 'rotate- -90 duration-500 ease-in-out'}`}
                    >
                      <svg
                        className="h-6 w-6 text-black" 
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M4 6h16M4 12h16m-7 6h7"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
          {isMobileMenuOpen && (
            <div className="lg:hidden">
              <div className=" mt-2 flex flex-col space-y-5 text-center text-2xl font-bold">
                <Link to="/" className='hover:text-coffeecolor1 hover:underline'>Home</Link>
                <Link to="/Menu" className='hover:text-coffeecolor1 hover:underline'>Menu</Link>
                <Link to="/Merchendise" className='hover:text-coffeecolor1 hover:underline'>Merchendise</Link>
                <Link to="/AboutUs" className='hover:text-coffeecolor1 hover:underline'>About Us</Link>
              </div>
            </div>
          )}
        </nav>
    </>
  )
}

export default Navbar