import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <h1>Our online course</h1>
            <nav>
                <a href="/course">Course</a>
                <a href="/contact">Contact</a>
            </nav>
        </div>
    );
};

export default Header;