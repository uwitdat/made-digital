import React, { useState, useEffect } from 'react'
import MADE_LOGO_WHITE from '../../../public/assets//made-logo-white.png'
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

  const [isScrolling, setIsScrolling] = useState(null);
  const [isHeightChecked, setIsHeightChecked] = useState(false);

  useEffect(() => {
    const checkPosition = () => {
      if (typeof window !== "undefined") {
        const position = window.pageYOffset > 70;
        return position;
      }
    }
    setIsScrolling(checkPosition());
    setTimeout(() => { setIsHeightChecked(true) }, 500);
  }, [])

  const handleScroll = () => {
    const position = window.pageYOffset > 70;
    setIsScrolling(position);
  };

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={isHeightChecked ? "Nav" : "Nav not-checked"}>
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