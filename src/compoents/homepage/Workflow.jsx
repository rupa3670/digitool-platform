import React from 'react';

const Workflow = () => {
    return (
        <div className='bg-linear-to-r from-blue-900 to-purple-500 text-white py-30 px-50 flex flex-col justify-center items-center text-center'>
            <div className='mb-10'>
                <h2 className='text-3xl font-bold'>Ready to Transform Your Workflow?</h2>
            <p className='text-sm text-gray-200 mt-2' >Join thousands of professionals who are already using Digitools to work smarter. <br />Start your free trial today.</p>
            </div>
            <div className='flex  gap-4  mb-5'>
                <button className='bg-white text-purple-500 py-3 px-4 rounded-full font-semibold'>Explore Products</button>
            <button className='to-purple-500 text-white font-semibold rounded-full hover:opacity-90 transition-all border border-white py-3 px-4'>View Pricing</button>
            </div>
           
                <p className='text-sm text-gray-200'>14-day free trial • No credit card required • Cancel anytime</p>
            
        </div>
    );
};

export default Workflow;