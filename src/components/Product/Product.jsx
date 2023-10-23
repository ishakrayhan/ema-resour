import React from 'react';
import'./Product.css'

const Product = (props) => {
    
    const {img,price,name,seller,quantity,ratings}=props.product;
    return (
        <div className='product'>
          
           <img src={img} alt="" /> 
          <div className='product-info'>
          <h6 className='product-name'>{name}</h6>
           <p>Price: ${price}</p>
           <p>Manufacturer: {seller}</p>
           <p>Rating: {ratings} Stars</p>
          </div>
          <button className='btn-card'>Add to Card</button>
        </div>
    );
};

export default Product;