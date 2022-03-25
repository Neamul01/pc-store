import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <h2>Pc Store</h2>
            <div className='header-details'>
                <a href="/home">Home</a>
                <a href="/cart">Cart</a>
                <a href="/support">Support</a>
            </div>
        </div>
    );
};

export default Header;