import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div>
            <h1>Hit Parade</h1>
            <div className="navigation">
                <Link to="/">
                    <h3>🔥 Popular songs</h3>
                </Link>
                <Link to="/style">
                    <h3>💓Styles</h3>
                </Link>
                <Link to="/add">
                    <h3>🌚 Add</h3>
                </Link>
                <Link to="/cart">
                    <h3>🛒 Cart</h3>
                </Link>
            </div>
        </div>
    )
}

export default Header;