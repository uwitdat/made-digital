import React, { useState, useEffect } from 'react';
import styles from './MobileNav.css';
import { CgMenuMotion } from 'react-icons/cg';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from '@remix-run/react';
import disableScroll from 'disable-scroll';

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

const MobileNav = ({ isOpen, handleCloseMenu, handleOpenMenu }) => {
  const [isScrolling, setIsScrolling] = useState(null);

  useEffect(() => {
    if (isOpen) {
      disableScroll.on();
    } else {
      disableScroll.off();
    }
  }, [isOpen]);

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
    <nav>
      {isOpen ? (
        <AiOutlineClose className="hamburger" onClick={handleCloseMenu} />
      ) : (
        <CgMenuMotion
          className={isScrolling ? 'hamburger hide' : 'hamburger'}
          onClick={handleOpenMenu}
        />
      )}
      {isOpen ? (
        <ul className="MobileNav">
          <li onClick={handleCloseMenu}>
            <Link to={`/?to=services`}>Services</Link>
          </li>

          <li onClick={handleCloseMenu}>
            <Link to={`/?to=testimonials`}>Testimonials</Link>
          </li>

          <li onClick={handleCloseMenu}>
            <Link to={`/about`}>About</Link>
          </li>

          <li onClick={handleCloseMenu}>
            <Link to={`/contact`}>Contact</Link>
          </li>
        </ul>
      ) : null}
    </nav>
  );
};

export default MobileNav;
