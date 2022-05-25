import React from 'react';
import { Link } from 'react-router-dom';
import FocusButton from '../Shared/FocusButton';


const Product = ({product}) => {
    const {name, description, price, minimum_order_quantity, available_quantity, picture} = product;
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
      <FocusButton>
        <Link to='/purchase'>Purchase</Link>
      </FocusButton>
    </div>
  </div>
</div>
        </div>
    );
};

export default Product;