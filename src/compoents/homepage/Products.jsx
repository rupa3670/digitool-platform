import { use } from 'react';
import ProductCard from './ProductCard';

const Products = ({productsPromise,carts,setCarts}) => {
    const allProducts=use(productsPromise)
  
   return (
        <div>
            
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-5 md:px-10 mb-20 w-full'>
            {allProducts.map(allProducts=>
              
              <ProductCard key={allProducts.id} allProducts={allProducts} carts={carts} setCarts={setCarts}/>
            )}
        </div>
        </div>
    );
};

export default Products;