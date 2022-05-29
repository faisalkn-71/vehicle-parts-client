import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';


const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {

        const url = 'https://fathomless-plateau-95313.herokuapp.com/products';
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if(result.acknowledged){
                    toast.success("Product added successfully!!!")
                    window.location.reload();
                }
            })
    };

    return (
        <div className='m-3 '>

            <h2 className='text-2xl font-bold mb-4'>Please add a Product</h2>

            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>

                <input className='input input-bordered input-secondary w-full max-w-md mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <br />

                <textarea className='input input-bordered input-secondary w-full max-w-md mb-2' placeholder='Description' {...register("description")} />
                <br />

                <input className='input input-bordered input-secondary w-full max-w-md mb-2' placeholder='Available Quantity' type="number" {...register("available_quantity")} />
                    < br />

                
                <input className='input input-bordered input-secondary w-full max-w-md mb-2' placeholder='Minimum Order Quantity' {...register("minimum_order_quantity", { required: true, maxLength: 20 })} />
                <br />

                <input className='input input-bordered input-secondary w-full max-w-md mb-2' placeholder='Photo URL' type="text" {...register("picture")}   />
                <br />

                <input className='input input-bordered input-secondary w-full max-w-md mb-2' placeholder='Price' {...register("price", { required: true, maxLength: 20 })} />
                <br />

                

                <input className='btn btn-primary w-100 text-white font-bold' type="submit" value="Add Product" />
            </form>
        </div>
    );
};

export default AddProduct;