import React from 'react';

import { Link } from 'react-router-dom';

function Navbar() {    
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="collapse navbar-collapse">
                <div class="navbar-nav">
                    <Link className={"navi-item nav-link"} to="/">Home</Link>  
                    <Link className={"navi-item nav-link"} to="/about">About</Link>
                    <Link className={"navi-item nav-link"} to="/contact">Contact</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar