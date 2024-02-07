import React from 'react'
import companyLogo from '../assets/alpha_logo.jpeg'
import { NavLink, useNavigate } from 'react-router-dom'


const HeaderComponent = () => {

  return (
    <div>
        <header>
        <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
            <div>
            <img src={companyLogo} alt="Alpha Inc. logo" className='img-test'/> 
              <a href='https://thealphatech.co.in' className='navbar-brand'>Alpha Tech Solutions</a>
            </div>
            <div className='collapse navbar-collapse'>
               <ul className='navbar-nav'>
                
                   <li className='navbar-item'>
                  <NavLink to='/home' className='nav-link'>Home</NavLink>
                </li>
                <li className='navbar-item'>
                  <NavLink to='/about' className='nav-link'>About us</NavLink>
                </li>
                <li className='navbar-item'>
                  <NavLink to='/services' className='nav-link'>Services</NavLink>
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