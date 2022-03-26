import React, { useEffect, useState } from 'react';
import OrderSummary from './OrderSummary/OrderSummary';
import Product from './Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProduct] = useState([]);

    useEffect(() => {
        fetch('product.json').then(res => res.json()).then(data => setProduct(data))
    }, [])
    return (
        <div className='body-container'>
            <div className='order-summery'>
                <OrderSummary></OrderSummary>
            </div>
            <div className='cart-container'>
                {
                    products.map(product => <Product product={product} key={product.id}></Product>)
                }

            </div>

        </div>
    );
};

export default Shop;