import React from 'react';

const ShowDetails = ({ singleCart, key }) => {
    console.log(singleCart.id, key)
    return (
        <div>
            <p>{singleCart.name}</p>
        </div>
    );
};

export default ShowDetails;