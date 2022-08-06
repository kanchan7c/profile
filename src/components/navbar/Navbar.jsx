import React, { useState } from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import CloseIcon from '@mui/icons-material/Close';
import FaceIcon from '@mui/icons-material/Face';

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  let show = () => {
    setMobileMenu(true);
  };

  let hide = () => {
    setMobileMenu(false);
  };

  return (
    <div className='navbar'>
      <div className='logo'>
        <FaceIcon />
        profile
      </div>
      <div>
        <nav className='nav-headers'>
          <Link className='nav-link' to='/'>
            Home
          </Link>
          <Link className='nav-link' to='/about'>
            About
          </Link>
          <Link className='nav-link' to='/projects'>
            Projects
          </Link>
          <Link className='nav-link' to='/skills'>
            Skills
          </Link>
          <Link className='nav-link' to='/contact'>
            Contact
          </Link>
        </nav>

        <nav className={mobileMenu ? 'nav-headers-mobile show' : 'hide'}>
          <Link className='nav-link' to='/'>
            Home
          </Link>
          <Link className='nav-link' to='/about'>
            About
          </Link>
          <Link className='nav-link' to='/projects'>
            Projects
          </Link>
          <Link className='nav-link' to='/skills'>
            Skills
          </Link>
          <Link className='nav-link' to='/contact'>
            Contact
          </Link>
        </nav>
      </div>
      <div className='nav-mobile-icon'>
        <span className='nav-mobile'>
          {!mobileMenu ? (
            <MenuOpenIcon onClick={show} />
          ) : (
            <CloseIcon onClick={hide} />
          )}
        </span>
      </div>
    </div>
  );
};

export default Navbar;
