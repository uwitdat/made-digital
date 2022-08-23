import styles from './Partners.css';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { createRef, useRef } from 'react';
import { IconsTabOne, IconsTabTwo } from '../icons-tab';
import useMediaQuery from '../../hooks/useMediaQuery';

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

const Partners = () => {
  const options = {
    root: null,
    rootMargin: '10px',
    threshold: 0.5,
  };

  const optionsImg = {
    root: null,
    rootMargin: '10px',
    threshold: 0,
  };

  const isMobile = useMediaQuery('(max-width: 800px)')

  const [container, isTitleVisible] = useIntersectionObserver(options);
  const [containerTwo, isImgsVisible] = useIntersectionObserver(optionsImg);
  const [containerThree, isPartnersVisible] = useIntersectionObserver(options);

  const icons = [<IconsTabOne />, <IconsTabTwo />];
  const elementsRef = useRef(icons.map(() => createRef()));

  return (
    <main className="Partners">
      <section className="Partners-titles">
        <div
          ref={containerTwo}
          className={isImgsVisible ? 'push-right swing-left' : 'push-right'}
        >
          <img
            src="/assets/partners.jpg"
            className="Partners-main-img"
            alt="partners"
          />
        </div>
        <div
          style={isMobile ? { paddingTop: '2em' } : { paddingTop: '8em' }}
          ref={container}
          className={isTitleVisible ? 'push-left swing-right' : 'push-left'}
        >
          <h1>Partnerships</h1>
          <h2>
            We’ve partnered with some of the biggest players in the eCommerce
            space.
          </h2>
          <h3>
            We specialize in quite a few things, but we can’t do it all.
            Thankfully, we’ve partnered with some of the best technologies and
            services in the eCommerce space to bring you the most value. You’ll
            be able to tap into our premium partner network and unlock the
            powerful tools, resources, and support you need to drive your
            business to new heights.
          </h3>
          <p className="meet-partners pulse" style={{ visibility: 'hidden' }}>
            Meet our partners &darr;
          </p>
        </div>
      </section>

      <div
        ref={containerThree}
        className={
          isPartnersVisible ? 'clear fade-in carousel' : 'clear carousel'
        }
      >
        {icons.map((collection, idx) => (
          <div ref={elementsRef.current[idx]} className="icons" key={idx}>
            {collection}
          </div>
        ))}
      </div>
    </main>
  );
};

export default Partners;
