import styles from './IncMonthlySales.css';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

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

  return (
    <section className='IncMonthlySales'>
      <div className='IncMonthlySales-title'>
        <h1 className={isTitleVisible ? 'push-left swing-right' : 'push-left'} ref={container}><span>Increase</span> Your Monthly Sales.</h1>
      </div>
      <div ref={containerTwo} className={isImgsVisible ? 'IncMonthlySales-container push-left swing-right' : 'IncMonthlySales-container push-left'}>
        <div>
          <img src='/assets/pex2.jpg' alt='person in office' />
        </div>
        <div>
          <img src='/assets/group-11.jpg' alt='people collaborating in office' />
        </div>
        <h2
          className={isTextVisible ? 'push-right swing-left' : 'push-right'}
          ref={containerThree}>With over 8 years of collective experience in eCommerce, we've helped 150+ business owners build and scale their stores, and we're excited to help you too!</h2>
      </div>
    </section>
  )
}

export default IncMonthlySales