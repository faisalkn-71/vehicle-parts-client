import React from 'react';
import { toast } from 'react-toastify';
import useProduct from '../../hook/useProduct'

const Pd = ({ product }) => {
    const [products, setProducts] = useProduct([])
    const { _id, name, description, price, minimum_order_quantity, available_quantity, picture } = product;

    const handleDelete = id => {
        const proceed = window.confirm("Are you sure?");
        if(proceed){
            const url = `http://localhost:5000/products/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.acknowledged){
                    toast('Successfully deleted the Product!!!')
                }
                const remaining = products.filter(product => product._id !== id);
                setProducts(remaining);
            })

        }
    }
    return (
        <div>
            <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img width='300px' height='300px' src={picture} alt="motor-parts" />
                </figure>
                <div className="card-body ">
                    <h2 className="card-title">{name}</h2>
                    <p><small>{description}</small></p>
                    <p >Available Order Quantity: {available_quantity}</p>
                    <p>Minimum Order Quantity: {minimum_order_quantity}</p>
                    <p>Price Per Product: ${price}</p>
                    <br />
                    <div className="card-actions">

                        <button onClick={() => handleDelete(_id)}  className='btn-accent px-3 py-2 rounded text-white font-bold' >Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pd;