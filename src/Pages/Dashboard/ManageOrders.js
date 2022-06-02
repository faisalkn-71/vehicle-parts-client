import React, {useState, useEffect} from 'react';
import Order from './Order';


const ManageOrders = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/order')
        .then(res => res.json())
        .then(data => setOrders(data))
    }, [])
    return (
        <div>
            <h1>All Orders: {orders.length}</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
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