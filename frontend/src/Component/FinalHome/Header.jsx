import React from 'react';
import './header.css';
import suitcase from '../../assets/images/suitcase.svg'
import { Link } from "react-router-dom";
import logo from "../../../src/assets/images/logo.png";


function ResponsiveAppBar() {


  return (
   <>
    <div className='header'>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container">
            <Link className="navbar-brand me-4 fw-bold">  Logo</Link>
                {/* <Link className="navbar-brand me-4" to={'/'}><img src={logo} /></Link> */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                         <Link className="nav-link active" aria-current="page" to={'/'}>Home </Link>
                        </li>
                        <li className="nav-item">
                         <Link className="nav-link" to={'/'}>About Us</Link>
                        </li>
                        <li className="nav-item">
                         <Link className="nav-link" to={'/'}>Contact us</Link>
                        </li>
                    </ul>
                    <div className='d-flex'>
                       <div className='agent-login-btn d-flex align-items-center'>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                              <Link className="nav-link btn-primary login-btn" aria-current="page" to='/login' >Agent Login   </Link>
                            </li>
                            <li className="nav-item">
                              <Link className="nav-link btn-warning agent-btn " aria-current="page" to='/signup'>Agent Signup</Link>
                            </li>
                        </ul>    
                            
                        </div> 
                    </div>
                </div>
            </div>
        </nav>
    </div>    
   </>
  );
}
export default ResponsiveAppBar;