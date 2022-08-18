import React, { useState } from 'react';
import styles from './Testimonials.css';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { testimonials } from './data';
import IMG from '../../../public/assets/test-2.jpg';

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(false);

  const handleChangePanel = () => {
    setFade(true);
    if (current === testimonials.length - 1) {
      setTimeout(() => {
        setCurrent(0);
      }, 650);
    } else {
      setTimeout(() => {
        setCurrent(current + 1);
      }, 650);
    }
    setTimeout(() => {
      setFade(false);
    }, 1200);
  };

  const options = {
    root: null,
    rootMargin: '10px',
    threshold: 0.5,
  };

  const [container, isVisible] = useIntersectionObserver(options);
  const [btnContainer, isBtnVisible] = useIntersectionObserver(options);
  const [imgContainer, isImgVisible] = useIntersectionObserver(options);

  return (
    <section className="Testimonials" id="testimonials">
      <div ref={container} className={isVisible ? 'clear fade-in' : 'clear'}>
        <h1 className="testimonials-title">Testimonials</h1>
        <div className={fade ? 'testimonial slide-out' : 'testimonial'}>
          <blockquote>{testimonials[current].quote}</blockquote>
          <p>
            {testimonials[current].from}
            <a
              href={testimonials[current].url}
              noopener="true"
              noferrer="true"
              target="_blank"
            >
              <span>{testimonials[current].site}</span>
            </a>
          </p>
        </div>
        <button
          ref={btnContainer}
          disabled={fade}
          onClick={handleChangePanel}
          className={
            isBtnVisible
              ? 'testimonial-view-more swing-left'
              : 'testimonial-view-more push-right'
          }
        >
          View More
        </button>
      </div>
      <div
        ref={imgContainer}
        className={isImgVisible ? 'clear fade-in' : 'clear'}
      >
        <img src={IMG} alt="Happy men with tablet" />
      </div>
    </section>
  );
};

export default Testimonials;
