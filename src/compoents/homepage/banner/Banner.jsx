import React from 'react';
import img from '../../../assets/Play.png'
import banner from '../../../assets/banner.png'
const Banner = () => {
    return (
        <>
    <section className='bg-white py-5 lg:py-10 '>
         <div className='max-w-7xl mx-auto px-4 lg:px-8  flex flex-col lg:flex-row items-center justify-between gap-y-10'>
            <div className='flex-1'>
           <div className='mb-4'>
           
            <button className='flex items-center gap-2 px-4 py-2 text-purple-600 bg-blue-100  rounded-full'>  <span className='w-4 h-4 rounded-full bg-purple-400 inline-block' ></span>New: AI-Powered Tools Available</button>
            </div>
            
            <h1 className='text-4xl font-bold mb-4'>Supercharge Your <br />
                Digital Workflow</h1>
            <p className='text-gray-500 mb-8 max-w-md'>Access premium AI tools, design assets, templates, and productivity <br />
                software—all in one place. Start creating faster today.

                Explore Products
            </p>
        <div className='flex gap-4 flex-wrap'>
            <button className='btn btn-getStarted bg-linear-to-r from-blue-900 to-purple-500 text-white font-semibold rounded-full hover:opacity-90 transition-all'>Explore Products</button>
            <button className='btn btn-getStarted text-purple-500  border-purple-500 bg-white font-semibold rounded-full  transition-all'><span><img src={img} alt="play button" /></span>Watch Demo</button>
            </div>  
     </div>
     <div className='flex-1 flex justify-center '>
        <img className=' h-100 lg:h-150 rounded-2xl' src={banner} alt="banner img" />
     </div>
         </div>
    </section>
     </>
        
    );
};

export default Banner;