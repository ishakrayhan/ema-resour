import React from 'react';
import'./Product.css'

const Product = (props) => {
    
    const {img,name,sellar,quantity,}=props.product
    return (
        <div>
           <h1>this is Product</h1>
           <img src={img} alt="" /> 
        </div>
    );
};

export default Product;