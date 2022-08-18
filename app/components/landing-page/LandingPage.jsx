import styles from './LandingPage.css';
import { Link } from '@remix-run/react';
import {
  IncMonthlySales,
  links as monthlySalesLinks,
} from '../inc-monthly-sales';
import { Partners, links as partnerLinks } from '../partners';
import { Testimonials, links as testimonialLinks } from '../testimonials';
import { Services, links as servicesLinks } from '../services-tab';
import { Cta, links as ctaLinks } from '../cta';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { useEffect } from 'react';
import { scroller } from 'react-scroll';

export function links() {
  return [
    ...ctaLinks(),
    ...servicesLinks(),
    ...testimonialLinks(),
    ...partnerLinks(),
    ...monthlySalesLinks(),
    { rel: 'stylesheet', href: styles }
  ];
}

const LandingPage = ({ scrollTo }) => {
  const options = {
    root: null,
    rootMargin: '10px',
    threshold: 0,
  };

  useEffect(() => {
    if (scrollTo) {
      scroller.scrollTo(`${scrollTo}`, {
        duration: 200,
        delay: 550,
        smooth: 'easeInOutQuart',
      });
    }
  }, [scrollTo]);

  const [container, isRefVisible] = useIntersectionObserver(options);
  const [containerTwo, isRefVisibleTwo] = useIntersectionObserver(options);
  const [containerThree, isRefVisibleThree] = useIntersectionObserver(options);

  return (
    <div
      ref={container}
      className={isRefVisible ? 'Landing clear fade-in' : 'Landing clear'}
    >
      <main className="Main">
        <img
          src="/assets/bg.jpg"
          alt="Made Digital background"
          className="Main-bg-img"
        />
        <section className="Main-content">
          <h1>
            Made <span> Digital</span>
          </h1>
          <h2>
            A leading eCommerce agency that specializes in website strategy and
            development services.
          </h2>
          <Link to="#landing-video">
            <button>Learn More</button>
          </Link>
        </section>
      </main>
      <section className="LandingVideo" id="landing-video">
        <div
          className={
            isRefVisibleTwo
              ? 'LandingVideo-content push-left swing-right'
              : 'LandingVideo-content push-left'
          }
          ref={containerTwo}
        >
          <h2>Meet Ademola</h2>
          <p>One of the co-founders of Made Digital.</p>
        </div>

        <iframe
          title="Made Digital Landing Video"
          ref={containerThree}
          className={isRefVisibleThree ? 'tolstoy fade-in' : 'tolstoy clear'}
          id="tolstoy"
          src="https://player.gotolstoy.com/62n0hdjcjb8fn?host"
          scrolling="no"
          frameBorder="0"
          allow="autoplay *; clipboard-write *;camera *; microphone *; encrypted-media *; fullscreen *; display-capture *;"
        ></iframe>
      </section>

      <IncMonthlySales />
      <Partners />
      <Testimonials />
      <Services />
      <Cta />
    </div>
  );
};

export default LandingPage;
