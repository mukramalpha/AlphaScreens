import React from 'react'
import companyLogo from '../assets/alpha_logo.jpeg'
import { NavLink } from 'react-router-dom'


const HeaderComponent = () => {

  return (
    <div>
        <header>
        <nav className="navbar navbar-expand-lg  sticky-top navbar-dark bg-dark text-white" >
            <div>
            <img src={companyLogo} alt="Alpha Inc. logo" className='img-test'/> 
              <a href='https://thealphatech.co.in' className='navbar-brand'>Alpha Tech Solutions</a>
            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
             </button>
           <div className="collapse navbar-collapse" id="navbarSupportedContent">
               <ul className='navbar-nav'>
                
                   <li className='navbar-item'>
                  <NavLink to='/home' className='nav-link active'>Home</NavLink>
                </li>
                <li className='navbark-item'>
                  <NavLink to='/about' className='nav-link'>About us</NavLink>
                </li>
                <li className='navbar-item'>
                  <NavLink to='/clients' className='nav-link'>Clients</NavLink>
                </li>
                <li className='navbar-item'>
                  <NavLink to='/services' className='nav-link'>Services</NavLink>
                </li>
                
                <li className='navbar-item'>
                  <NavLink to='/gallery' className='nav-link'>Gallery</NavLink>
                </li>
                <li className='navbar-item'>
                  <NavLink to='/blog' className='nav-link'>Blog</NavLink>
                </li>
                <li className='navbar-item'>
                  <NavLink to='/contact' className='nav-link'>Contact us</NavLink>
                </li>
                  
               </ul>
            </div>
            <ul className='navbar-nav'>
              <li className='navbar-item'>
                <NavLink to='/register' className='nav-link'>Register</NavLink>
              </li>
             
                <li className='navbar-item'>
                <NavLink to='/login' className='nav-link'>Login</NavLink>
              </li>
                
               </ul>
        </nav>
        </header>
        
    </div>
  )
}

export default HeaderComponent