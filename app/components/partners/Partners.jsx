import styles from './Partners.css';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import React, { useState, createRef, useRef, useEffect } from 'react';
import { IconsTabOne, IconsTabTwo } from '../icons-tab';

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

const Partners = () => {
  const options = {
    root: null,
    rootMargin: '10px',
    threshold: 0.5
  }

  const optionsImg = {
    root: null,
    rootMargin: '10px',
    threshold: 0
  }

  const [container, isTitleVisible] = useIntersectionObserver(options);
  const [containerTwo, isImgsVisible] = useIntersectionObserver(optionsImg);
  const [containerThree, isPartnersVisible] = useIntersectionObserver(options);
  const [current, setCurrent] = useState(0);

  const icons = [<IconsTabOne />, <IconsTabTwo />, <IconsTabOne />, <IconsTabTwo />,]

  const elementsRef = useRef(icons.map(() => createRef()));

  const numOfClicks = icons.length - 1;

  const [clicks, setClicks] = useState(numOfClicks);
  const [goingUp, setGoingUp] = useState(true);

  const scroll = () => {
    if (goingUp) {
      elementsRef.current[current + 1].current.scrollIntoView();
      setCurrent(current + 1);
      setClicks(clicks - 1);
    } else {
      elementsRef.current[current - 1].current.scrollIntoView();
      setCurrent(current - 1);
      setClicks(clicks - 1);
    }
  }

  // const TIMER = 4000;

  useEffect(() => {
    if (clicks === 0) {
      setGoingUp(!goingUp);
      setClicks(numOfClicks);
    }

    // const interval = setInterval(() => {
    //   scroll();
    // }, TIMER);
    // return () => clearInterval(interval);
  }, [clicks])

  return (
    <main className='Partners'>
      <section className='Partners-titles'>
        <div ref={containerTwo} className={isImgsVisible ? 'push-right swing-left' : 'push-right'}>
          <img src='/assets/pex1.jpg' className='Partners-main-img' alt='partners' />
        </div>
        <div style={{ paddingTop: '8em' }} ref={container} className={isTitleVisible ? 'push-left swing-right' : 'push-left'}>
          <h1>Partnerships</h1>
          <p>We’ve partnered with some of the biggest players in the eCommerce space.</p>
          <h3>We specialize in quite a few things, but we can’t do it all. Thankfully, we’ve partnered with some of the best technologies and services in the eCommerce space to bring you the most value.  You’ll be able to tap into our premium partner network and unlock the powerful tools, resources, and support you need to drive your business to new heights.</h3>
          <p className='meet-partners pulse' style={{ visibility: 'hidden' }}>
            Meet our partners &darr;
          </p>
        </div>
      </section>

      <div ref={containerThree} className={isPartnersVisible ? 'clear fade-in carousel' : 'clear carousel'}>
        {icons.map((collection, idx) => (
          <div ref={elementsRef.current[idx]} className='icons' key={idx}>{collection}</div>
        ))}
      </div>
    </main>
  )
}

export default Partners