import React, {  } from 'react';
import Cart from './Cart';

const Tabs = ({activeTab,setActiveTab,carts=[]}) => {
    return (
   <div className='flex justify-center items-center bg-gray-50 p-2 rounded-full w-fit mx-auto mb-10 gap-3'>
    <button onClick={()=>setActiveTab("Products")} className={` px-8 py-3  rounded-full font-bold transition-all ${activeTab==="Products" ? "bg-linear-to-r from-blue-900 to-purple-500 text-white " :"text-gray-500 hover:bg-gray-200"}`}>Products</button>
    <button onClick={()=>setActiveTab("Cart")} className={` px-8 py-3  rounded-full font-bold transition-all ${activeTab==="Cart" ? "bg-linear-to-r from-blue-900 to-purple-500 text-white " :"text-gray-500 hover:bg-gray-200"}`}>
      Car({carts.length})  
    </button>

   </div>
    );
} ;

export default Tabs;
