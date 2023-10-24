import React, { useEffect, useState } from 'react';
import './shop.css'
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProducts] = useState([]);

        const [card,setCard]=useState([])


    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    const handlarAddToCart =(product) =>{
        const newCard =[...card,product];
        setCard(newCard);

    }

    return (
        <div className='shop-container'>
          <div className='products-container'>
           {
            products.map(product => <Product
                key={product.id}
                product={product}
                handlarAddToCart={handlarAddToCart}
            ></Product>)
           }
          </div>
          <div className='cart-container'>
        <h4>order summary</h4>
        <p>selected items:{card.length}</p>
            </div>  
        </div>
    );
};

export default Shop;