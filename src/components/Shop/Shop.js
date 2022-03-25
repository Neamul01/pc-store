import React, { useEffect, useState } from 'react';
import Product from './Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProduct] = useState([]);

    useEffect(() => {
        fetch('product.json').then(res => res.json()).then(data => setProduct(data))
    }, [])
    return (
        <div className='body-container'>
            <div className='cart-container'>
                {
                    products.map(product => <Product product={product} key={product.id}></Product>)
                }

            </div>
            <div>
                <h2>Hello</h2>
            </div>
        </div>
    );
};

export default Shop;