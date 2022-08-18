import React, { useState, useEffect } from 'react';
import MADE_LOGO_WHITE from '../../../public/assets//made-logo-white.png';
import styles from './Nav.css';
import { useLocation } from '@remix-run/react';
import { Link } from '@remix-run/react';
import useMediaQuery from '../../hooks/useMediaQuery';
import { MobileNav, links as mobileNavLinks } from '../mobile-nav';

export function links() {
  return [...mobileNavLinks(), { rel: 'stylesheet', href: styles }];
}

const Nav = () => {
  const location = useLocation();
  const currentTab = location.pathname.substring(1).toLowerCase();

  const [isScrolling, setIsScrolling] = useState(null);
  const [isHeightChecked, setIsHeightChecked] = useState(false);
  const isMobile = useMediaQuery('(max-width: 1000px)');

  const [isOpen, setIsOpen] = useState(false);
  const handleCloseMenu = () => setIsOpen(false);
  const handleOpenMenu = () => setIsOpen(true);

  useEffect(() => {
    const checkPosition = () => {
      if (typeof window !== 'undefined') {
        const position = window.pageYOffset > 70;
        setIsScrolling(position);
      }
    };
    checkPosition();

    setTimeout(() => {
      setIsHeightChecked(true);
    }, 500);
  }, []);

  const handleScroll = () => {
    const position = window.pageYOffset > 70;
    setIsScrolling(position);
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={isHeightChecked ? 'Nav' : 'Nav not-checked'}>
      <div className={isScrolling ? 'nav-top-panel hide' : 'nav-top-panel'}>
        <Link to="/referrals">
          <p
            onClick={handleCloseMenu}
            id={currentTab === 'referrals' ? 'underline' : ''}
          >
            Refer A Client
          </p>
          <p />
        </Link>
      </div>

      <div className="nav-bottom-panel">
        <Link to="/">
          <img
            className={isScrolling ? 'logo shrink' : 'logo'}
            src={MADE_LOGO_WHITE}
            alt="Made Digital Logo"
          />
        </Link>

        {isMobile ? ( // TODO: move below content to <StaticNav/> component
          <MobileNav
            isOpen={isOpen}
            handleCloseMenu={handleCloseMenu}
            handleOpenMenu={handleOpenMenu}
          />
        ) : (
          <ul className={isScrolling ? 'navList hide' : 'navList'}>
            <li
              className={
                currentTab === 'services' ? 'nav-item active' : 'nav-item'
              }
            >
              <Link to={`/?to=services`}>Services</Link>
            </li>

            <li
              className={
                currentTab === 'testimonials' ? 'nav-item active' : 'nav-item'
              }
            >
              <Link to={`/?to=testimonials`}>Testimonials</Link>
            </li>

            <li
              className={
                currentTab === 'about' ? 'nav-item active' : 'nav-item'
              }
            >
              <Link to={`/about`}>About</Link>
            </li>

            <li
              className={
                currentTab === 'contact' ? 'nav-item active' : 'nav-item'
              }
            >
              <Link to={`/contact`}>Contact</Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Nav;
