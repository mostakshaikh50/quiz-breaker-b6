import React from 'react';
import './Header.css'
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <nav>
                <NavLink className={({isActive}) => isActive ? 'active': undefined} to='/home'>Home</NavLink>                
                
                <NavLink to='/stat'>Statistics</NavLink>
                <NavLink to='/blog'>Blog</NavLink>
            </nav>
            
        </div>
    );
};

export default Header;