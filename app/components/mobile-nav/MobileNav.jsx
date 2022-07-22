import React, { useState, useEffect } from 'react'
import styles from './MobileNav.css';
import { CgMenuMotion } from 'react-icons/cg';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from '@remix-run/react';

export function links() {
  return [
    { rel: 'stylesheet', href: styles },
  ];
}

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "scroll"
    }
  }, [isOpen])

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

  const handleCloseMenu = () => setIsOpen(false);

  return (
    <nav>
      {isOpen ? (
        <AiOutlineClose className='hamburger' onClick={() => setIsOpen(false)} />
      ) : (
        <CgMenuMotion className={isScrolling ? 'hamburger hide' : 'hamburger'} onClick={() => setIsOpen(true)} />
      )}
      {isOpen ? (
        <ul className='MobileNav'>
          <Link to={`/?to=services`}>
            <li onClick={handleCloseMenu}>Services</li>
          </Link>
          <Link to={`/?to=testimonials`}>
            <li onClick={handleCloseMenu}>Testimonials</li>
          </Link>
          <Link to={`/about`}>
            <li onClick={handleCloseMenu}>About</li>
          </Link>
          <Link to={`/contact`}>
            <li onClick={handleCloseMenu}>Contact</li>
          </Link>
        </ul>
      ) : null}
    </nav>
  )
}

export default MobileNav