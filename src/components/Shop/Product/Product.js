import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'

const Product = (props) => {
    const { name, id, price, picture } = props.product;
    return (
        <div className='cart'>
            <img src={picture} alt="" />
            <div className='cart-details'>
                <h2>{name}</h2>
                <p>Price: ${price}</p>
                <button><span>Add To Cart</span><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> </button>
            </div>
        </div>
    );
};

export default Product;