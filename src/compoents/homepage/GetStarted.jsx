import React from 'react';
import img from '../../assets/user.png'
import packages from '../../assets/package.png'
import rocket from '../../assets/rocket.png'

const GetStarted = () => {
    return (
        <div className='bg-gray-50 py-20'>
            <div className='flex flex-col justify-center items-center gap-3 mb-10'>
            <h1 className='text-2xl md:text-4xl font-bold'>Get Started in 3 Steps</h1>
            <p className='text-gray-500 text-sm'>Start using premium digital tools in minutes, not hours.</p>
        </div>
        <div className=' grid grid-col-1 md:grid-cols-3 max-w-7xl mx-auto gap-10 px-10 md:px-30'>
            <div className="card bg-base-100 shadow-sm">
                <div className='flex justify-end p-4'>
                    <p className='bg-linear-to-r from-blue-900 to-purple-500 text-white rounded-full p-2  w-10 h-10 text-center'>01</p>
                </div>
  <figure>
    <img className='bg-purple-100 p-3 rounded-full mt-8'
      src={img}
      alt="user" />
  </figure>
  <div className="card-body flex flex-col justify-center items-center text-center">
    <h2 className="card-title font-semibold text-2xl">Create Account</h2>
    <p className='text-gray-500 '>Sign up for free in seconds. No credit card <br />required to get started.</p>
    
  </div>
</div>

<div className="card bg-base-100  shadow-sm">
                <div className='flex justify-end p-4'>
                    <p className='bg-linear-to-r from-blue-900 to-purple-500 text-white rounded-full p-2  w-10 h-10 text-center'>02</p>
                </div>
  <figure>
    <img className='bg-purple-100 p-3 rounded-full mt-8'
      src={packages}
      alt="package" />
  </figure>
  <div className="card-body flex flex-col justify-center items-center text-center ">
    <h2 className="card-title font-semibold text-2xl">Choose Products</h2>
    <p className='text-gray-500 '>Browse our catalog and select the tools <br />that fit your needs.</p>
    
  </div>
</div>
<div className="card bg-base-100  shadow-sm">
                <div className='flex justify-end p-4'>
                    <p className='bg-linear-to-r from-blue-900 to-purple-500 text-white rounded-full p-2  w-10 h-10 text-center'>03</p>
                </div>
  <figure>
    <img className='bg-purple-100 p-3 rounded-full mt-8 '
      src={rocket}
      alt="rocket" />
  </figure>
  <div className="card-body flex flex-col justify-center items-center text-center mb-13">
    <h2 className="card-title font-semibold text-2xl">Start Creating</h2>
    <p className='text-gray-500 '>Download and start using your premium <br />tools immediately.</p>
    
  </div>
</div>
        </div>
        </div>
        
 
    );
};

export default GetStarted;