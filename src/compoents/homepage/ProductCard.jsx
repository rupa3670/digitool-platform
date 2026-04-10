import React, { useState } from 'react';
import { toast } from 'react-toastify';

const ProductCard = ({allProducts,carts,setCarts}) => {
      const [isBuy, setIsBuy]=useState(false)
      const handleBuy=()=>{
        setIsBuy(true)
        setCarts([...carts,allProducts])
        toast.success("Item added to cart!");
      }
   const getTagClass =(type) => {
 const tagStyles={
        "popular":"badge-info text-white rounded-full",
        "best seller":"badge-warning text-white rounded-full",
        "new":"badge-success text-white rounded-full"

    };
    return tagStyles[type] || "badge-ghost";
   
   };
    const periodLevel={
        "monthly":"/Month",
        "one-time":"/one-time",
        yearly:"/year",
    }
    return (
        <div>
            
                <div key={allProducts.id} className="card w-fit bg-base-100 border border-gray-100 shadow-sm hover:shadow-md transition-all ">
  <div className="card-body p-8 ">
    <div className='flex justify-between items-start mb-1 md:mb-4'>
        <div className='border border-gray-100 p-2 rounded-full'>
         <img src={allProducts.icon} alt=""  className='w-8 h-8'/>
        </div>
        
    <span className={` badge  ${getTagClass(allProducts.tagType)}`}>{allProducts.tag}</span>
    </div>
    <div className=" ">
      <h3 className="text-2xl font-semibold ">{allProducts.name} </h3>
       <p className='text-sm text-gray-500 mt-2 line-clamp-2'>{allProducts.description}</p>
    </div>
    <div className='text-2xl font-bold gap-2'>
        ${allProducts.price}
        <span className='text-sm font-normal text-gray-500'>{periodLevel[allProducts.period]}</span>

    </div>
    <ul className=" mt-3 md:mt-6 flex flex-col gap-3 text-sm text-gray-500">
       {
         allProducts.features.map((feature, index)=>(
 <li key={index} className='flex items-center gap-2'>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>{feature}</span>
      </li>
         ))
       }
     
      
      
    </ul>
    <div className=" mt-3 md:mt-6">
      <button onClick={handleBuy} className="btn btn-block rounded-full  bg-linear-to-r from-blue-900 to-purple-500 text-white font-semibold">{isBuy ? "Purchased" : "Buy Now"}</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default ProductCard;