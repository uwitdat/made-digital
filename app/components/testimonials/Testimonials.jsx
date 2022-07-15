import React, { useState } from 'react'
import styles from './Testimonials.css';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(false)

  const handleChangePanel = () => {
    setFade(true);
    if (current === testimonials.length - 1) {
      setTimeout(() => { setCurrent(0) }, 550)
    } else {
      setTimeout(() => { setCurrent(current + 1) }, 550)
    }
    setTimeout(() => { setFade(false) }, 1100)
  }

  const options = {
    root: null,
    rootMargin: '10px',
    threshold: 0.5
  }

  const [container, isVisible] = useIntersectionObserver(options);
  const [btnContainer, isBtnVisible] = useIntersectionObserver(options);
  const [imgContainer, isImgVisible] = useIntersectionObserver(options);

  return (
    <section className='Testimonials'>
      <div ref={container} className={isVisible ? 'clear fade-in' : 'clear'}>
        <h1 className='testimonials-title'>Testimonials</h1>
        <div className={fade ? 'testimonial slide-out' : 'testimonial'}>
          <blockquote>
            {testimonials[current].quote}
          </blockquote>
          <p>{testimonials[current].from}<span> {testimonials[current].site}</span></p>
        </div>
        <button
          ref={btnContainer}
          disabled={fade}
          onClick={handleChangePanel}
          className={isBtnVisible ? 'testimonial-view-more swing-left' : 'testimonial-view-more push-right'}>
          View More
        </button>
      </div>
      <div ref={imgContainer} className={isImgVisible ? 'clear fade-in' : 'clear'}>
        <img src='/assets/test-2.jpg' />
      </div>
    </section>
  )
}

const testimonials = [
  {
    quote: "With Made's help, our business managed to increase our average monthly revenue by 20% in just three months!",
    from: "— Oli F,",
    site: "YesWeVibe",
  },
  {
    quote: "Made Digital helped us point out seemingly small changes that made a huge difference in the way that customers interacted with our site. Their advice was instrumental in helping us turn more visitors into customers!",
    from: "- Lauren M,",
    site: "Plant Collective",
  },
  {
    quote: "Made Digital is headed by experts in the space. They're an invaluable resource for anyone looking to take their business to the next level.",
    from: "- Megan M,",
    site: "Folklor",
  },
]

export default Testimonials

