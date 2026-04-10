import React from 'react';

const Pricing = () => {
    return (
       <div className='py-10 md:py-20'>
         <div className='flex flex-col justify-center items-center text-center '>
            <h2 className=' text-3xl md:text-4xl font-bold'>Simple, Transparent Pricing</h2>
            <p className='text-sm  text-gray-500 mt-4'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
        </div>
 <div className='max-w-7xl mx-auto grid grid-col-1 md:grid-cols-3 mt-10 md:mt-20 gap-8 px-10 md:px-30  '>
           <div className="card  bg-gray-50 shadow-sm rounded-lg">
  <div className="card-body flex flex-col h-full">
    <div className="flex flex-col">
      <h2 className="text-2xl font-bold">Starter</h2>
      <p className='text-gray-500 text-sm mt-1'>Perfect for getting started</p>
    </div>
    <div>
        <h3 className='font-bold text-2xl'>$0 <span className='font-normal text-sm text-gray-500'>/month</span></h3>
    </div>
    <ul className="mt-3 flex flex-col flex-grow gap-2 text-xs">
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Access to 10 free tools</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Basic templates</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Community support</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Community supports</span>
      </li>
       <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>1 project per month</span>
      </li>
      
    </ul>
    <div className="mt-6">
      <button className="btn btn-primary btn-block rounded-full bg-linear-to-r from-blue-900 to-purple-500 text-white">Get Started Free</button>
    </div>
  </div>
</div>
<div className="card relative bg-linear-to-r from-blue-900 to-purple-500 text-white   shadow-sm ">
  <div className="card-body flex flex-col h-full  ">
    <div>
        <span className='text-[#BB4D00] bg-[#fae7da] py-2 px-3 rounded-full text-center absolute -top-4 left-1/2 -translate-x-1/2  ' >Most Popular</span>
    </div>
    <div className="flex flex-col">
      <h2 className="text-2xl font-bold">Pro</h2>
      <p className='text-gray-200 text-sm mt-1'>Best for professionals</p>
    </div>
    <div>
        <h3 className='font-bold text-2xl'>$29 <span className='font-normal text-sm text-gray-200'>/month</span></h3>
    </div>
    <ul className="mt-3 flex flex-col flex-grow gap-2 text-xs text-white">
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-white " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Access to all premium tools</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Unlimited templates</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Priority support</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Unlimited projects</span>
      </li>
       <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Cloud sync</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Advanced analytics</span>
      </li>
      
    </ul>
    <div className="mt-6">
      <button className="btn btn-primary btn-block rounded-full bg-white text-purple-500 font-medium  ">Get Started Free</button>
    </div>
  </div>
</div>
<div className="card  bg-gray-50 shadow-sm">
  <div className="card-body flex flex-col h-full">
    <div className="flex flex-col">
      <h2 className="text-2xl font-bold">Enterprise</h2>
      <p className='text-gray-500 text-sm mt-1'>For teams and businesses</p>
    </div>
    <div>
        <h3 className='font-bold text-2xl'>$99 <span className='font-normal text-sm text-gray-500'>/month</span></h3>
    </div>
    <ul className="mt-3 flex flex-col flex-grow gap-2 text-xs">
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Everything in Pro</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Team collaboration</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Custom integrations</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Dedicated support</span>
      </li>
       <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>SLA guarantee</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Custom branding</span>
      </li>
      
    </ul>
    <div className="mt-6">
      <button className="btn btn-primary btn-block rounded-full bg-linear-to-r from-blue-900 to-purple-500 text-white">Contact Sales</button>
    </div>
  </div>
</div>
 </div>
       </div>
    );
};

export default Pricing;