import React, { useEffect, useState } from 'react';
import OrderSummary from './OrderSummary/OrderSummary';
import Product from './Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProduct] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('product.json').then(res => res.json()).then(data => setProduct(data))
    }, [])

    const addToCart = (selectedProduct) => {
        const newCart = [...cart, selectedProduct]
        setCart(newCart);
    }
    return (
        <div className='body-container'>

            <div className='order-summery'>
                <OrderSummary cart={cart}></OrderSummary>
            </div>

            <div className='cart-container'>
                {
                    products.map(product => <Product
                        product={product}
                        key={product.id}
                        addToCart={addToCart}
                    ></Product>)
                }

            </div>

        </div>
    );
};

export default Shop;