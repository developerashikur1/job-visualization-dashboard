import React from 'react';
import logo from './Logo.svg';
import './Header.scss';

const Header = () => {
    return (
        <div className='mainDiv'>
            <img src={logo} alt='' logo='true' />
        </div>
    );
};

export default Header;