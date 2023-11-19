import React, { useState } from 'react';
import Card from '../Card/Card';
import { useLoaderData } from 'react-router-dom';
import './Order.css'
import Product from '../Product/Product';
import Review from '../ReviewItem/Review';
import { removeFromDb } from '../../utilities/fakedb';



const Oder = () => {
    const savedCart = useLoaderData()
      const [cart, setCart]=useState(savedCart)
            const handleRemoveFromCart = (id)=>{
                const remaing = cart.filter(product => product.id !== id );
                setCart(remaing);
                removeFromDb(id);
            }
    return (
        <div className='shop-container'>
        <div className='review-container'>
        {
            cart.map(product => <Review
            key={product.id}
            product={product}
            handleRemoveFromCart={handleRemoveFromCart}
            ></Review>)
        }
        </div>
        <div className='cart-container'>
                <Card card={cart}
                ></Card>
          </div>  
      </div>
    );
};

export default Oder;