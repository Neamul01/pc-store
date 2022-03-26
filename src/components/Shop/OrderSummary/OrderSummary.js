import { faRemove, faTicket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './OrderSummary.css'

const OrderSummary = () => {
    return (
        <div className='summary-cart'>
            <h2>Order Summary</h2>
            <div className="summary-buttons">
                <button className='summary-choose-btn'>Choose 1 For Me <FontAwesomeIcon icon={faTicket}></FontAwesomeIcon></button>
                <button className='summary-remove-btn'>Remove All <FontAwesomeIcon icon={faRemove}></FontAwesomeIcon></button>
            </div>
        </div>
    );
};

export default OrderSummary;