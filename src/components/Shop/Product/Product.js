import React from 'react';
import './Product.css'

const Product = (props) => {
    const { name, id, price, picture } = props.product;
    return (
        <div className='cart'>
            <img src={picture} alt="" />
            <div className='cart-details'>
                <h2>{name}</h2>
                <p>{price}</p>
                <button>Add To Cart</button>
            </div>
        </div>
    );
};

export default Product;