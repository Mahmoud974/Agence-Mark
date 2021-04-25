import React from 'react';
import {NavLink} from 'react-router-dom'

const Navbar = () => {

        let flexboxOne = "pt-5 d-flex justify-content-between align-items-center text-uppercase fw-bold "
    
    return (
        
        <div className="container">
        <nav className={flexboxOne}>

        
        <div className="logo">
            <h2>Monlogo</h2>
        </div>
            <div  className="blocNav">
            <ul className="d-flex justify-content-between">
                <NavLink exact to='/' activeClassName="navActive">
                <li >Acceuil</li>
                 </NavLink>
                 <NavLink exact to="/services" activeClassName="navActive">
                 <li>Services</li>
                </NavLink>
                <NavLink exact to="/gallery" activeClassName="navActive">
                <li>Gallery</li>
                </NavLink>
                <NavLink exact to="/avis" activeClassName="navActive">
                <li>Avis</li>
                </NavLink>
                <NavLink exact to="/contact" activeClassName="navActive">
                <li>Contact</li>
                </NavLink>
            </ul>
            

        </div>

        </nav>

        </div>
    );
};

export default Navbar;