import React from 'react';
import'./Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    console.log(props)
    const {img,price,name,seller,quantity,ratings}=props.product;
    const handlarAddToCart= props.handlarAddToCart;
    return (
        <div className='product'>
          
           <img src={img} alt="" /> 
          <div className='product-info'>
          <h6 className='product-name'>{name}</h6>
           <p>Price: ${price}</p>
           <p>Manufacturer: {seller}</p>
           <p>Rating: {ratings} Stars</p>
          </div>
          <button onClick={ ()=> handlarAddToCart(props.product)} className='btn-card'>Add to Card
          <FontAwesomeIcon icon={faShoppingCart} />
          </button>
        </div>
    );
};

export default Product;