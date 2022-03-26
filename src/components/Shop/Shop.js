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
        const randomId = Math.floor(Math.random() * cart.length + 1);
        console.log(randomId)
        console.log(cart)
        // {
        //     const filtered = cart.find(randomId === cart.id);
        //     console.log(filtered)
        // }
        // setCart([])

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