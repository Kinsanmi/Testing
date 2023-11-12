import {Link, NavLink} from 'react-router-dom';
import './Header.css';
import Logo from '../Image/Logo .png';
import { useState } from 'react';


export const Header = ({to, label}) => {
  const [isOpen, setIsOpen] = useState(false);


  // Active link when clicked
  const [isActive, setIsActive] = useState(false);

  const click = ()=>{
    setIsActive(true);
  }



  return (
    <>
    <Link to={to} className={isActive ? 'active' : ''} onClick={click}>{label}</Link>
    <header>
      <div className="container">
        <NavLink className='home' to='./home'><img src={Logo} alt='' /></NavLink>

        <div className={isOpen ? "nav-bar expand" : "nav-bar"} onFocus={()=>{setIsOpen(false)}}>
          <ul className='nav-menu'>
            <li><NavLink to='/home'>Home</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>
            <li><NavLink to='/cart'>Cart</NavLink></li>
            <li><NavLink to='/shop'>Shop</NavLink></li>
          </ul>
        </div>

        <div className="sign-up">
          <NavLink to='/sign-up'>Sign up</NavLink>
          <div className={isOpen ? "hamburger open" : "hamburger"} onClick={ () =>{setIsOpen(!isOpen)}}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </div>


    
       
        
      </div>
    </header>
    </>
  )
}


