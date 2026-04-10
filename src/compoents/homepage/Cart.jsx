import React from 'react';

const Cart = ({ carts,handleRemoveCart }) => {
    const totalPrice=carts.reduce((sum,item)=>sum+item.price,0);
    if (carts.length === 0) {
        return (
            <div className='flex flex-col items-center justify-center min-h-[400px] text-center border border-gray-300 p-8 shadow-sm mx-40 mt-10'>
                <h2 className='text-2xl font-bold '>Your Cart Is Empty</h2>
                <p className='text-gray-500 mt-2'>Looks like you haven't added <br />any digital tools.
                </p>
            </div>
        );
    }
return(
<div className='p-10 max-w-5xl mx-auto border border-gray-100 shadow-sm'>
    <h1 className='text-2xl font-bold mb-8'>Your Cart</h1>
    <div className='grid gap-4'>
        {carts.map((item)=>
        <div key={item.id} className='flex items-center justify-between p-5 border border-gray-100 shadow-sm rounded-2xl bg-gray-50'>
         <div className='flex items-center gap-5'>
             <div className='bg-white p-2 rounded-full border border-gray-200'>
            <img className='h-8 w-8 object-contain' src={item.icon} alt="" />
          </div>
          <div>
              <h3 className='font-bold text-lg'>
                {item.name}
              </h3>
              <p className='text-gray-500 text-sm'>${item.price}</p>
          </div>
         </div>
          <button onClick={()=>handleRemoveCart(item.id)} className='text-red-500 font-bold '>Remove</button>
        </div>
        )}
        <div className='flex justify-between'>
            <p className='text-gray-500 text-sm'>Total:</p>
        <span className='text-xl font-semibold'>${totalPrice}</span>
        </div>
         <button className="btn btn-block  bg-linear-to-r from-blue-900 to-purple-500 rounded-full text-white font-bold">Processed to Checkout</button>
    </div>
   
</div>
);
   


                
};

            export default Cart;