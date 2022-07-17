import React, { useState, useEffect } from 'react'
import MADE_LOGO_WHITE from '../../../public/assets//made-logo-white.png'
import styles from './Nav.css';
import { useLocation } from '@remix-run/react'
import { Link } from '@remix-run/react';

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

const Nav = () => {
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

      <div className={isScrolling ? 'nav-top-panel hide' : 'nav-top-panel'}>
        <Link to='/referrals'>
          <p id={currentTab === 'referrals' ? 'underline' : ''}>Refer - 5% rev share</p>
          <p />
        </Link>
      </div>

      <div className='nav-bottom-panel'>
        <Link to='/'>
          <img
            className={isScrolling ? 'logo shrink' : 'logo'}
            src={MADE_LOGO_WHITE} alt='Made Digital Logo' />
        </Link>

        <ul className={isScrolling ? 'navList hide' : 'navList'}>
          <Link to={`#services`}>
            <li className={currentTab === "services" ? 'nav-item active' : 'nav-item'}>Services</li>
          </Link>
          <Link to={`#testimonials`}>
            <li className={currentTab === 'testimonials' ? 'nav-item active' : 'nav-item'}>Testimonials</li>
          </Link>
          <Link to={`/about`}>
            <li className={currentTab === 'about' ? 'nav-item active' : 'nav-item'}>About</li>
          </Link>
          <Link to={`/contact`}>
            <li className={currentTab === 'contact' ? 'nav-item active' : 'nav-item'}>Contact</li>
          </Link>
        </ul>
      </div>
    </nav>
  )
}

export default Nav