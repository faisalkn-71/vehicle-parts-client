import React, {useState, useEffect} from 'react';
import Order from './Order';


const ManageOrders = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('https://fathomless-plateau-95313.herokuapp.com/orders')
        .then(res => res.json())
        .then(data => setOrders(data))
    }, [])
    return (
        <div>
            <h1 className='text-2xl font-bold'>All Orders: {orders.length}</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                {
                    orders.map(order =>  <Order
                    key={order._id}
                    order = {order}
                    ></Order>)
                }
            </div>
        </div>
    );
};

export default ManageOrders;