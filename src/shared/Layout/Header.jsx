import React from 'react';
import {Link} from 'react-router-dom';

function Header(){
    return(
        <nav className="navbar navbar-dark bg-dark shadow-sm">
            <span className="navbar-brand mb-0 h1">Random User App</span>
            <Link to="/">Home</Link>
            <Link to="/users">Users</Link>
            <Link to="/users/1">User Details</Link>
            <Link to="/about">About Us</Link>

        </nav>
    );
}
export default Header;
