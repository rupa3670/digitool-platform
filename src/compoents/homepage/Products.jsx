import { use } from 'react';
import ProductCard from './ProductCard';

const Products = ({productsPromise}) => {
    const allProducts=use(productsPromise)
  
   return (
        <div>
            <div className='flex flex-col justify-center items-center text-center my-10'>
            <h2 className='text-4xl font-bold mb-4 '>Premium Digital Tools</h2>
            <p className='text-gray-500'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
        </div>
        <div className='grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-10 md:mx-40'>
            {allProducts.map(allProducts=>
              
              <ProductCard allProducts={allProducts}/>
            )}
        </div>
        </div>
    );
};

export default Products;