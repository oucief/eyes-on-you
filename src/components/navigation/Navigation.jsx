import React from "react";
import Logo from '../logo/Logo';
import './Navigation.css';

const Navigation = () => {
    return (
        <nav className="Navigation">
            <Logo />
            <a href="www.eds.com">Sign Out</a>
        </nav>
    );
};


export default Navigation;