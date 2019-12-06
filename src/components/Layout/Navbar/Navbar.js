import React from 'react';

import { Link } from 'react-router-dom';

function Navbar() {    
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="collapse navbar-collapse">
                <div className="navbar-nav">
                    <Link className={"navi-item nav-link"} to="/">Home</Link>  
                    <Link className={"navi-item nav-link"} to="/sports/nba">NBA</Link>
                    <Link className={"navi-item nav-link"} to="/contact">Contact</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar