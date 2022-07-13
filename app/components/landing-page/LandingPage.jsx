import styles from './LandingPage.css';
import { Link } from '@remix-run/react';
import BG from '../../../public/assets/vg-7.jpg';
import { IncMonthlySales, links as monthlySalesLinks } from '../inc-monthly-sales';
import { Partners, links as partnerLinks } from '../partners';
import { useState, useEffect } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

export function links() {
  return [
    ...partnerLinks(),
    ...monthlySalesLinks(),
    { rel: "stylesheet", href: styles }
  ];
}


const LandingPage = () => {
  const options = {
    root: null,
    rootMargin: '10px',
    threshold: 0
  }

  const [container, isRefVisible] = useIntersectionObserver(options);

  const [vis, setVis] = useState(false);

  useEffect(() => {
    if (isRefVisible) setVis(true);
  }, [isRefVisible])

  return (
    <div ref={container} className={vis ? "Landing clear fade-in" : "Landing clear"}>
      <main className="Main">
        <img src={BG} alt='digital background' className='Main-bg-img' />
        <section className='Main-content'>
          <h1>Made <span> Digital</span></h1>
          <h5>A leading eCommerce agency that specializes in website strategy and development services.</h5>
          <Link to='#landing-video'>
            <button>Show me more</button>
          </Link>
        </section>
      </main>

      <section className='LandingVideo' id='landing-video' />
      <IncMonthlySales />
      <Partners />
    </div>
  )
}

export default LandingPage