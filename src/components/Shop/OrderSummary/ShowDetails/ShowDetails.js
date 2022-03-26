import React from 'react';
import './ShowDetails.css'

const ShowDetails = ({ singleCart, key }) => {
    console.log(singleCart)
    return (
        <div>
            <p className='selected-product-details'>{singleCart.name} <img src={singleCart.picture} alt="" /> </p>
        </div>
    );
};

export default ShowDetails;