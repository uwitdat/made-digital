import styles from './LandingPage.css';
import { Link } from '@remix-run/react';
import BG from '../../../public/assets/vg-7.jpg';
import { IncMonthlySales, links as monthlySalesLinks } from '../inc-monthly-sales';
import { Partners, links as partnerLinks } from '../partners';
import { Testimonials, links as testimonialLinks } from '../testimonials';
import { Services, links as servicesLinks } from '../services-tab';
import { Cta, links as ctaLinks } from '../cta';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

export function links() {
  return [
    ...ctaLinks(),
    ...servicesLinks(),
    ...testimonialLinks(),
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

  return (
    <div ref={container} className={isRefVisible ? "Landing clear fade-in" : "Landing clear"}>
      <main className="Main">
        <img src={BG} alt='digital background' className='Main-bg-img' />
        <section className='Main-content'>
          <h1>Made <span> Digital</span></h1>
          <h5>A leading eCommerce agency that specializes in website strategy and development services.</h5>
          <Link to='#landing-video'>
            <button>Learn More</button>
          </Link>
        </section>
      </main>

      <section className='LandingVideo' id='landing-video' />
      <IncMonthlySales />
      <Partners />
      <Testimonials />
      <Services />
      <Cta />
    </div>
  )
}

export default LandingPage