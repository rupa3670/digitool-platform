import { use } from 'react';
import ProductCard from './ProductCard';

const Products = ({productsPromise,carts,setCarts}) => {
    const allProducts=use(productsPromise)
  
   return (
        <div>
            
        <div className='grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-10 md:mx-40 mb-20'>
            {allProducts.map(allProducts=>
              
              <ProductCard key={allProducts.id} allProducts={allProducts} carts={carts} setCarts={setCarts}/>
            )}
        </div>
        </div>
    );
};

export default Products;