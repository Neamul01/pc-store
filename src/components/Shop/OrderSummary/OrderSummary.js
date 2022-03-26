import { faRemove, faTicket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './OrderSummary.css'

const OrderSummary = ({ cart, chooseOneBtn, removeBtn }) => {
    return (
        <div className='summary-cart'>
            <h2>Order Summary</h2>
            <div className="selected-product-list">
                <h4>Selected Product:{cart.length}</h4>
                {
                    cart.map(singleCart => <p className='selected-product-details'>{singleCart.name} <img src={singleCart.picture} alt="" /> </p>)
                }
            </div>
            <div className="summary-buttons">
                <button onClick={chooseOneBtn} className='summary-choose-btn'>Choose 1 For Me <FontAwesomeIcon icon={faTicket}></FontAwesomeIcon></button>
                <button onClick={removeBtn} className='summary-remove-btn'>Remove All <FontAwesomeIcon icon={faRemove}></FontAwesomeIcon></button>
            </div>
        </div>
    );
};

export default OrderSummary;