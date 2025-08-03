import React, { useState, useRef } from 'react';
import './NavBar.css';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { scrollToSection } from '../../utils/smoothScroll';

const Navbar = () => {
  const [menu, setMenu] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setMenu('home');
    closeMenu();
  };

  return (
    <nav className='navbar'>
      <h1>dev.<span>Suraj</span></h1>
      <img 
        src={menu_open} 
        alt="menu" 
        className={`nav-mob-open ${isMenuOpen ? 'hide' : ''}`}
        onClick={toggleMenu}
      />
      <img 
        src={menu_close} 
        alt="close" 
        className={`nav-mob-close ${isMenuOpen ? 'show' : ''}`}
        onClick={toggleMenu}
      />
      <ul ref={menuRef} className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
        <li className={menu === 'home' ? 'active' : ''}>
          <a className='anchor-link' onClick={scrollToTop} style={{cursor: 'pointer'}}>
            <p>Home</p>
          </a>
        </li>
        <li className={menu === 'about' ? 'active' : ''}>
          <AnchorLink className='anchor-link' offset={50} href='#about' onClick={() => {setMenu('about'); closeMenu();}}>
            <p>About me</p>
          </AnchorLink>
        </li>
        <li className={menu === 'education' ? 'active' : ''}>
          <AnchorLink className='anchor-link' offset={50} href='#education' onClick={() => {setMenu('education'); closeMenu();}}>
            <p>Education</p>
          </AnchorLink>
        </li>
        <li className={menu === 'services' ? 'active' : ''}>
          <AnchorLink className='anchor-link' offset={50} href='#services' onClick={() => {setMenu('services'); closeMenu();}}>
            <p>Services</p>
          </AnchorLink>
        </li>
        <li className={menu === 'work' ? 'active' : ''}>
          <AnchorLink className='anchor-link' offset={50} href='#work' onClick={() => {setMenu('work'); closeMenu();}}>
            <p>Projects</p>
          </AnchorLink>
        </li>
        <li className={menu === 'contact' ? 'active' : ''}>
          <AnchorLink className='anchor-link' offset={50} href='#contact' onClick={() => {setMenu('contact'); closeMenu();}}>
            <p>Contact me</p>
          </AnchorLink>
        </li>
      </ul>
      <div className="nav-connect">
        <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink>
      </div>
    </nav>
  );
};

export default Navbar;