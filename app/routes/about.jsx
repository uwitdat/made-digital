import React from 'react';
import styles from '../styles/aboutPage.css';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { data } from '../SEO';

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

export const meta = () => ({
  charset: 'utf-8',
  title: 'About Made Digital',
  viewport: 'width=device-width,initial-scale=1',
  description: 'A leading eCommerce agency that specializes in website strategy and development services.',
  keywords: data
});


const About = () => {
  const options = {
    root: null,
    rootMargin: '10px',
    threshold: 0,
  };

  const [container, isVisible] = useIntersectionObserver(options);
  const [containerTwo, isVisibleTwo] = useIntersectionObserver(options);

  return (
    <section className='About-container'>
      <div className="About">
        <section ref={containerTwo} className={isVisibleTwo ? 'fade-in' : 'clear'} style={{ position: 'relative' }}>
          <h2>Who We Are</h2>
          <div className='margin-sm' />
          <p>
            Made Digital is a leading Commerce agency that specializes in website
            strategy and development services.</p>
          <div className='margin-md' />
          <p>With over 8 years of collective
            experience in Commerce, we’ve helped 150+ merchants build, scale, and
            execute on their most ambitious goals. Every goal can be broken down
            into small, comprehensible steps. We are experts at uncovering small
            changes that have substantial impact.</p>
          <div className='margin-md' />
          <p>
            We partner with our clients to
            apply unconventional solutions to complex problems. Every brand is
            unique, and it’s our mission to ensure that those we engage with
            implement solutions that are tailored to their business and its goals.
          </p>

          <div className='margin-md' />
          <p style={{ maxWidth: '38ch', width: '100%' }}>
            We are relentlessly curious in our approach. We steer clear of quick
            -fixes and band- aid solutions. And most importantly, we always get
            results.
          </p>
        </section>

        <div className='margin-xl' />

        <section ref={container} className={isVisible ? 'swing-right' : 'push-left'}>
          <h2 className='title-trunc'> <span>Made Digital's</span> Services Are For</h2>
          <div className='margin-sm' />
          <ul className='About-services'>
            <li>eCommerce merchants on Shopify, WooCommerce, Squarespace, or
              BigCommerce.</li>

            <li>
              Midsize to enterprise brands in need of custom
              implementation.
            </li>

            <li>
              Midsize to enterprise brands looking to increase their
              customer retention and conversion rates
            </li>
          </ul>
        </section>

      </div>
      <div className='About-img-bg'>
        <img src='/assets/bg.jpg' alt='Made Digital logo' />
      </div>
    </section>
  );
};

export default About;
