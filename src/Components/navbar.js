import React from "react";
import logo from '../logo.svg';
import {Dropdown} from 'react-bootstrap';
import {CardWidget} from './cardwidget';

// Para usar Router
import {Link} from "react-router-dom"

export const NavBar = () => {
    //aca va javascript
    
    return(
        
        <nav className=" navbar navbar-expand-lg navbar-light bg-light border-top-0 "> {/* fixed-top */}
            
            {/* Este era un a y lo cambie por link para usar router */}
            <Link to = '/' className="navbar-brand" href="#">
            <img src={logo} width="30" height="30" className="d-inline-block align-top" alt=""/>
            E-Commerce
            </Link>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

           
            <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNavAltMarkup">
                <ul className="navbar-nav">

                    <Link to = '/list' className="nav-item nav-link active" href="#">Productos <span className="sr-only">(current)</span></Link>
                    {/* <Link to = '/category' className="nav-item nav-link active" href="#"> Categoria <span className="sr-only">(current)</span></Link> */}
                    <li className="nav-item nav-link" href="#">Features</li>
                    <li className="nav-item nav-link" href="#">Pricing</li>
                    <li className="nav-item nav-link disabled" href="#">Disabled</li>

                    <Dropdown>
                        <Dropdown.Toggle variant="" id="dropdown-basic">
                        Menu
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">subMennu 1</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">subMennu 1</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">subMennu 1</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </ul>
                <div className="btn btn-success mx-5">
                <CardWidget ></CardWidget>
                </div>
            </div>
          

     
        </nav>



    );
};