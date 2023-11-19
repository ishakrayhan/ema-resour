import React from 'react';
import './ReviewItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const Review = ({product,handleRemoveFromCart}) => {
    const {id, img, price, name,quantity}=product;
    return (
        <div className='review-item'>
        <img className='cart-img2' src={img} alt="" />
        <div className='review-detail'>
            <p className='product-tittle'>{name}</p>
            <p>Price: ${price}</p>
            <p>Order Quantity:{quantity}</p>
            
        </div>
        <button onClick={() => handleRemoveFromCart(id)} className='btn-delete'>
        <FontAwesomeIcon icon={faTrashAlt} />
        </button>
        
     
        </div>
    );
};

export default Review;