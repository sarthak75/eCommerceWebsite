import React from 'react'
import { NavLink } from 'react-router-dom'
import CartBtn from './buttons/CartBtn'
import Login from './buttons/Login'
import Signup from './buttons/Signup'

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light " style={{backgroundColor:'#e3f2fd'}}>
                <div className="container-fluid py-2">
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/" style={{color:'black',fontSize:'1.4rem'}}>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/products" style={{color:'black',fontSize:'1.4rem'}}>Our Products</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about" style={{color:'black',fontSize:'1.4rem'}}>About Us</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact" style={{color:'black',fontSize:'1.4rem'}}>Contact Us</NavLink>
                            </li>
                            
                            
                        </ul>
                    <NavLink className="navbar-brand mx-auto fw-bold" to="/" style={{color:'blue',fontSize:'2.7rem',fontWeight:'bolder'}}>HP EXCLUSIVE STORE💻</NavLink>
                    <Login/>
                    <Signup/>
                    <CartBtn/>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header
