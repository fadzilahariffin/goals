import React from 'react';
import '../styles/App.css'

const Header = () => {
    return(
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand mx-auto" href="/">Goals</a>
            </div>  
        </nav>
    )
}

export default Header;
