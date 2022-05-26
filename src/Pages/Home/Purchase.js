import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import useProductDetails from '../../hook/useProductDetails'
import axios from 'axios'
import {toast } from 'react-toastify';


const Purchase = () => {
    const { productId } = useParams();

    const [product, setProduct] = useProductDetails(productId)

    const [user] = useAuthState(auth);


    const handleOrderNow = event => {
        event.preventDefault();
        const order = {
            email: user.email,
            name: product.name,
            productId: productId,
            address: event.target.address.value,
            quantity: event.target.quantity.value,
            phone: event.target.phone.value,
        }
        axios.post('http://localhost:5000/order', order)
        .then(response => {
            const {data} = response;
            if(data.insertedId){
                toast("Your Order is Proceed!!!")
            }
        })

    }


    return (
        <div>
            <div>
            <div class="hero min-h-screen J">
                <div class="hero-content flex-col lg:flex-row">
                    <img src={product.picture} class="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 class="text-3xl font-bold">{product.name}</h1>
                        <p><small>{product.description}</small></p>
                        <p className='mt-5'>Available Order Quantity: {product.available_quantity}</p>
                        <p>Minimum Order Quantity: {product.minimum_order_quantity}</p>
                        <p>Price Per Product: ${product.price}</p>
                    </div>
                </div>
            </div>
            </div>


            <br></br>


            <div className='my-3 flex flex-col justify-center items-center'>

            <form onSubmit={handleOrderNow}>

                <input className='input input-bordered input-secondary w-100 mb-2' type="text" name='name' placeholder='Name' value={user?.displayName} required readOnly disabled />
                <br/>
                
                <input className='input input-bordered input-secondary w-100 mb-2' type="text" name='email' placeholder='Email' value={user?.email} required readOnly disabled />
                <br/>
                
                <input className='input input-bordered input-secondary w-100 mb-2' type="text" name='product name' placeholder='Product Name' value={product.name} required readOnly />
                <br/>
                
                <input className='input input-bordered input-secondary w-100 mb-2' type="text"  name='address' placeholder='address' autoComplete='off' required />
                <br/>
               
                <input className='input input-bordered input-secondary w-100 mb-2' type="text"  name='quantity' placeholder='Quantity' required  />
                <br/>

                <input className='input input-bordered input-secondary w-100 mb-2' type="text"  name='phone' placeholder='phone' required  />
                <br/>
                
                <input className='btn btn-primary w-100 text-white font-bold' type="submit" value="Order Now" />
            </form>
        </div>

        </div>

    );
};

export default Purchase;