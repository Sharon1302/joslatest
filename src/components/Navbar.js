import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          <img src ="https://aff-iot-static-assets.s3.eu-west-2.amazonaws.com/Josla+icon.png" alt="slide"/>
           
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item' >
              <Link className='nav-text' onClick={closeMobileMenu}>
                
                Smart Meter
                
              </Link>
            </li>
        
            <li className='nav-item'>
              <Link
              
                className='nav-text'
              >
                App Features
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                
                className='nav-text'
                onClick={closeMobileMenu}
              >
                About Us
              </Link>
            </li>

            <li>
              <Link
                to='/'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Login
              </Link>
            </li>
          </ul>
          {button && <Button
           buttonStyle='btn--yellow'
           buttonSize='btn--black'
           onClick={closeMobileMenu}>SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
