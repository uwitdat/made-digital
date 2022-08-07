import React from 'react'
import styles from './Cta.css';
import { Footer } from '../footer';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { Link } from '@remix-run/react';

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

const Cta = () => {

  const options = {
    root: null,
    rootMargin: '10px',
    threshold: 0
  }

  const [container, isVisible] = useIntersectionObserver(options);
  const [button, isBtnVisible] = useIntersectionObserver(options);

  return (
    <div className='Cta'>
      <img src='/assets/cta-bg.jpg' className='cta-bg' />
      <div ref={container} className={isVisible ? 'push-left swing-right cta-content' : 'push-left cta-content'}>
        <h1>Ready to <span>transform</span> your eCommerce business?</h1>
        <p>Join our 150+ happy clients today!</p>
      </div>
      <Link to='/contact'>
        <button ref={button} className={isBtnVisible ? 'push-left swing-right' : 'push-left'}><span>Get In Touch</span></button>
      </Link>
      <Footer />
    </div>
  )
}

export default Cta