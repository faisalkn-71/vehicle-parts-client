import React from 'react';
import useMyProduct from '../../hook/useMyProduct';
import Item from './Item';

const MyProduct = () => {
    const [myProduct, setMyProduct] = useMyProduct([]);

    return (
        <div>
            <h1 className=' text-2xl font-bold '>My Order</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    myProduct.map(item => <Item
                    key={item._id}
                    item = {item}
                    ></Item>)
                }
            </div>
            
        </div>
    );
};

export default MyProduct;