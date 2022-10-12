import React from 'react';
import './Header.css'
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <nav>
                <NavLink className={({isActive}) => isActive ? 'active': undefined} to='/home'>Home</NavLink>                
                
                {/* <NavLink to='/quiz'>Quiz</NavLink> */}
                <NavLink to='/blog'>Blog</NavLink>
            </nav>
            <p>This is common header!!</p>
        </div>
    );
};

export default Header;