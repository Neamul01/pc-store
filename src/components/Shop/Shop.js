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

    // choose one btn
    const chooseOneBtn = () => {
        const randomId = Math.floor(Math.random() * cart.length);

        for (let i = 0; i < cart.length; i++) {
            // console.log(cart[i])
            if (i === randomId) {
                const newCart = [cart[i]]
                setCart(newCart)
            }
        }
    }

    //remove all btn
    const removeBtn = () => {
        setCart([])
    }
    return (
        <div className='body-container'>

            {/* set the cart or order summmery */}
            <div className='order-summery'>
                <OrderSummary cart={cart} key={cart[0]?.id} chooseOneBtn={chooseOneBtn} removeBtn={removeBtn}></OrderSummary>
            </div>

            {/* seet product details in cart  */}
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