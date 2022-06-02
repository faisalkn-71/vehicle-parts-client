import React from 'react';
import useMyProduct from '../../hook/useMyProduct';

const Item = ({ item }) => {
    const [myProduct, setMyProduct] = useMyProduct([]);
    const { name, _id } = item;


    const handleDelete = id => {
        const proceed = window.confirm("Are you sure?");
        if(proceed){
            const url = `https://fathomless-plateau-95313.herokuapp.com/order/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                const remaining = myProduct.filter(product => product._id !== id);
                setMyProduct(remaining);
            })

        }
    }


    return (
        <div>
            <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Id: {_id}</p>
                   
                    <div className="card-actions justify-center">
                        <button onClick={() => handleDelete(_id)} className="btn btn-accent text-white font-bold">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Item;