import React from 'react';
import logo from '../../../assets/shopping-cart.png'
const Navbar = ({carts=[]}) => {
    return (
        
 <div className="navbar bg-base-100 shadow-sm mb-10">
  <div className=" max-w-7xl mx-auto m-full px-4">
    <div className="flex justify-between items-center w-full">
      <div className='navbar-start'>
       
      </div>
       <a className="btn btn-ghost text-2xl lg:text-3xl font-bold bg-linear-to-r from-blue-900 to-purple-500 bg-clip-text text-transparent">DigiTools</a>
    </div>
   
  </div>
  <div className="navbar-center hidden lg:flex ">
    <ul className="menu menu-horizontal px-1 font-semibold text-[16px]">
      <li ><a href='#'>Products</a></li>
      <li> <a href="#">Features</a>
      </li>
      <li> <a href="#">Pricing</a>
      </li> 
      <li> <a href="#">Testimonials</a>
      </li>
      <li> <a href="#">FAQ</a>
      </li>
    </ul>
  </div>
  <div className="navbar-end flex items-center gap-4 mx-auto ">
   <div className='relative p-2 '>
     <img className='' src={logo} alt="shopping cart logo" />
     {carts.length>0 &&(
       <span className='absolute -top-1 -right-1 rounded-full text-purple-500 font-bold'>{carts.length}</span>
     )}
   </div>
    <a href="#" className='font-semibold'>Login</a>
    <a className="btn btn-getStarted bg-linear-to-r from-blue-900 to-purple-500 text-white font-semibold rounded-full hover:opacity-90 transition-all">Get Started</a>
  </div>
</div>
       
    );
};

export default Navbar;