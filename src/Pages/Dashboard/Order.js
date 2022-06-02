import React from 'react';

const Order = ({ order }) => {
    const { name, productId, email, phone, quantity, address } = order
    return (
        <div>

            <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-secondary">{name}</h2>
                    <p>ProductId: {productId}</p>
                    <p>Ordered quantity: {quantity}</p>
                    <h1 className='font-bold'>Ordered By:</h1>
                    <p>Email: {email}</p>
                    <p>Phone: {phone}</p>
                    <p>Address: {address}</p>
                    
                </div>
            </div>

        </div>
    );
};

export default Order;