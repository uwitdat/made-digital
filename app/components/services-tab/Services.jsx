import React, { useState } from 'react'
import styles from './Services.css';
import { services } from './data';
import { IoChevronForwardCircleOutline, IoChevronBackCircleOutline } from 'react-icons/io5';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

export function links() {
  return [
    { rel: "stylesheet", href: styles }
  ];
}

const Services = () => {

  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(false);

  const handleBack = () => {
    setFade(true);
    setTimeout(() => { setCurrent(current - 1) }, 290);
    setTimeout(() => { setFade(false) }, 292);
  }

  const handleForwards = () => {
    setFade(true);
    setTimeout(() => { setCurrent(current + 1) }, 290);
    setTimeout(() => { setFade(false) }, 292);
  };

  const options = {
    root: null,
    rootMargin: '10px',
    threshold: 0.5
  }

  const [container, isVisible] = useIntersectionObserver(options);

  return (
    <div ref={container} className={isVisible ? 'Services clear fade-in' : 'Services clear'}>
      <h1>How We Help</h1>
      <section className='service'>
        <div className={fade ? 'service-container out' : 'service-container in'}>
          <div className='service-titles'>
            <h2>{services[current].title}</h2>
            <span>{services[current].icon}</span>
          </div>
          <p>{services[current].des}</p>
        </div>
      </section>
      <div className='service-btns'>
        <button disabled={current === 0} onClick={handleBack}>
          <IoChevronBackCircleOutline />
        </button>
        <button disabled={current === services.length - 1} onClick={handleForwards}>
          <IoChevronForwardCircleOutline />
        </button>

      </div>
    </div>
  )
}

export default Services