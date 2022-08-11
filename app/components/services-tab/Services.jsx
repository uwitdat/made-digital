import React, { useState } from 'react';
import styles from './Services.css';
import { services, titles } from './data';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import useMediaQuery from '../../hooks/useMediaQuery';

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

const Services = () => {
  const [current, setCurrent] = useState(0);
  const [currentTitle, setCurrentTitle] = useState(titles[0].ref);
  const [fade, setFade] = useState(false);

  const handleChangePanel = (ref) => {
    if (current === ref) return;
    setCurrentTitle(ref);
    setFade(true);
    setTimeout(() => {
      setCurrent(ref);
    }, 290);
    setTimeout(() => {
      setFade(false);
    }, 292);
  };

  const isMobile = useMediaQuery('(max-width: 1300px)');

  const options = {
    root: null,
    rootMargin: '10px',
    threshold: isMobile ? 0.1 : 0.5,
  };

  const [container, isVisible] = useIntersectionObserver(options);

  return (
    <div
      ref={container}
      className={isVisible ? 'Services clear fade-in' : 'Services clear'}
      id="services"
    >
      <h1>How We Help</h1>
      <div className="services-container">
        {!isMobile ? (
          <div className="services-nav-col">
            <ul className="services-nav">
              {titles.map(({ title, ref, icon }, idx) => (
                <li
                  onClick={() => handleChangePanel(ref)}
                  id={currentTitle === ref ? 'service-active' : ''}
                  key={idx}
                >
                  {title}
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        <div className="services-content-col">
          <section className="service">
            <div
              className={
                fade ? 'service-container out' : 'service-container in'
              }
            >
              {!isMobile ? (
                <React.Fragment>
                  <div className="service-titles">
                    <h2>{services[current].title}</h2>
                    <span>{services[current].icon}</span>
                  </div>
                  <p>{services[current].des}</p>
                </React.Fragment>
              ) : (
                services.map((service, idx) => (
                  <div className={'service-one'} key={idx}>
                    <div className="service-titles">
                      <h2>{service.title}</h2>
                      <span>{service.icon}</span>
                    </div>
                    <p>{service.des}</p>
                  </div>
                ))
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Services;
