import React from 'react';
import './Card.css';
const Card = ({card}) => {

    let total = 0;
    let quantity = 0;
    let totalShipping=0;
    for(const product of card){
        product.quantity=product.quantity || 1;
        total = total + product.price*product.quantity;
        totalShipping= totalShipping + product.shipping;
        quantity= quantity + product.quantity;


 
    }
    const tax = total*7/100;
    const grandTotal =total+totalShipping+tax;
    return (
        <div className='card'>
             <h4>Order Summary</h4>
        <p>selected items:{quantity}</p>
        <p>Total Price: ${total}</p>
        <p>Total Shipping Charge: ${totalShipping}</p>
        <p>Tax: $1{tax.toFixed(2)}</p>
        <h4>Grand Total: ${grandTotal.toFixed(2)}</h4>
        </div>
    );
};

export default Card;