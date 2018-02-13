import React from 'react';
import { Link } from 'react-router-dom';

export default props => {
    return (
        <nav>
            <div className="nav-wrapper">
                <Link className="brand-logo" to="/">Chattie Talkie</Link>
                <ul className="right">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/signin">Sign In</Link></li>
                    <li><Link to="/signup">Sign Up</Link></li>
                </ul>
            </div>
        </nav>
    )
}
