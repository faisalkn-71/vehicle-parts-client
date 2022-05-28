import React, { useEffect, useState } from 'react';
import useProduct from '../../hook/useProduct';
import ManageProduct from '../Dashboard/ManageProduct';
import Product from './Product';

const Products = () => {
    const [products, setProducts] = useProduct([]);
    
    return (
        <div>
            <h1 className='text-center text-4xl font-bold text-secondary'>Available Products</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                   products.map(product => <Product
                    key={product._id}
                    product = {product}
                   ></Product>) 
                }
            </div>
           
        </div>
    );
};

export default Products;