import React, { useState, useEffect } from 'react'
import MADE_LOGO_WHITE from '../../../public/assets/made-logo-white.png'
import MADE_LOGO_BLACK from '../../../public/assets/made-logo-black.png'
import styles from './Nav.css';
import { useLocation } from '@remix-run/react'
import { Link } from '@remix-run/react';

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

const Nav = () => {
  const navTabs = ['Services', 'Testimonials', 'About', 'Contact'];

  const location = useLocation();
  const currentTab = location.pathname.substring(1).toLowerCase();

  const [isScrolling, setIsScrolling] = useState(typeof window !== "undefined" && window.pageYOffset > 100);

  useEffect(() => {
    window.scrollTo(0, 0)
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setIsScrolling(window.pageYOffset > 70)
      );
    }
  }, []);

  return (
    <nav className={isScrolling ? "Nav scrolling" : "Nav"}>
      <Link to='/'>
        <img
          className={isScrolling ? 'logo shrink' : 'logo'}
          src={MADE_LOGO_WHITE} alt='Made Digital Logo' />
      </Link>

      <ul className={isScrolling ? 'navList hide' : 'navList'}>
        {navTabs.map((tab, idx) => (
          <Link to={`/${tab.toLowerCase()}`} key={idx}>
            <li className={currentTab === tab.toLowerCase() ? 'nav-item active' : 'nav-item'}>{tab}</li>
          </Link>
        ))}
      </ul>
    </nav>
  )
}

export default Nav