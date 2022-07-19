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

  useEffect(() => { /* fixes refresh */
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <i class="fa-solid fa-desktop"></i>
            PC4YOU  
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/browse'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Browse
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/discover'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Discover
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/about'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                FAQ 
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/cart'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                <i class="fa-solid fa-cart-shopping"></i>
              </Link>
            </li>

            <li>
              <Link
                to='/customize'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Customize
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>CUSTOMIZE</Button>}

          
          
        </div>
      </nav>
    </>
  );
}

export default Navbar;
