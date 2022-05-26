import React from 'react';
import {useNavigate} from 'react-router-dom';
import FocusButton from '../Shared/FocusButton';


const Product = ({product}) => {
    const {_id, name, description, price, minimum_order_quantity, available_quantity, picture} = product;

    const navigate = useNavigate()

    const navigateToPurchase = id => {
      navigate(`purchase/${id}`);
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
      
      <button className='btn-secondary px-3 py-2 rounded text-white font-bold' onClick={() => navigateToPurchase(_id)}>Purchase</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Product;