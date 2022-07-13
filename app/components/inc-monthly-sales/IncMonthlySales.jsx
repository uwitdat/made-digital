import styles from './IncMonthlySales.css';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { useState, useEffect } from 'react';

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

const IncMonthlySales = () => {

  const options = {
    root: null,
    rootMargin: '10px',
    threshold: 0.5
  }

  const [container, isTitleVisible] = useIntersectionObserver(options);
  const [containerTwo, isImgsVisible] = useIntersectionObserver(options);
  const [containerThree, isTextVisible] = useIntersectionObserver(options);

  const [title, setTitle] = useState(false);
  const [text, setText] = useState(false);
  const [imgs, setImgs] = useState(false);

  useEffect(() => {
    if (isTitleVisible) setTitle(true);
    if (isImgsVisible) setImgs(true);
    if (isTextVisible) setText(true);

  }, [isTitleVisible, isImgsVisible, isTextVisible])

  return (
    <section className='IncMonthlySales'>
      <div className='IncMonthlySales-title'>
        <h1 className={title ? 'push-left swing-right' : 'push-left'} ref={container}><span>Increase</span> Your Monthly Sales.</h1>
      </div>
      <div ref={containerTwo} className={imgs ? 'IncMonthlySales-container push-left swing-right' : 'IncMonthlySales-container push-left'}>
        <div>
          <img src='/assets/group-1.jpg' />
        </div>
        <div>
          <img src='/assets/group-11.jpg' />
        </div>
        <h2
          className={text ? 'push-right swing-left' : 'push-right'}
          ref={containerThree}>With over 8 years of collective experience in eCommerce, we've helped 150+ business owners build and scale their stores, and we're excited to help you too!</h2>
      </div>
    </section>
  )
}

export default IncMonthlySales