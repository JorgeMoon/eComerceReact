import React from "react";
import logo from '../logo.svg';


export const NavBar = () => {
    
    return(
        <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">
            <img src={logo} width="30" height="30" className="d-inline-block align-top" alt=""/>
            E-Commerce
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
                    <a className="nav-item nav-link" href="#">Features</a>
                    <a className="nav-item nav-link" href="#">Pricing</a>
                    <a className="nav-item nav-link disabled" href="#">Disabled</a>
                </div>
            </div>
        </nav>
        </div>
 
    
    );
};