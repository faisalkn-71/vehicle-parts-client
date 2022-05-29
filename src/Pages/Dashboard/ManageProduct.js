import React from 'react';
import useProduct from '../../hook/useProduct';
import Pd from './Pd';


const ManageProduct = () => {
    const [products, setProducts] = useProduct([]);

    
    return (
        <div>
        <h1 className='text-2xl font-bold'>Manage Products</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
            {
               products.map(product => <Pd
               key={product._id}
               product = {product}
               ></Pd>)
            }
        </div>
       
    </div>
    );
};

export default ManageProduct;