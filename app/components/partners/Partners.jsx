import styles from './Partners.css';
import BIG_ICON from '../../../public/icons/bigcommerce-icon.svg'
// import SHOP_ICON from '../../../public/icons/shopify-ar21.svg'
// import ALGOLIA_ICON from '../../../public/icons/algolia-ar21.svg'
import NICE_ICON from '../../../public/icons/NICE_Icon-Color.svg'
import { FaAlgolia, FaShopify, FaAws, FaAngellist } from 'react-icons/fa';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

const Partners = () => {
  const options = {
    root: null,
    rootMargin: '10px',
    threshold: 0.5
  }

  const [container, isTitleVisible] = useIntersectionObserver(options);
  const [containerTwo, isImgsVisible] = useIntersectionObserver(options);
  const [containerThree, isPartnersVisible] = useIntersectionObserver(options);

  return (
    <main className='Partners'>
      <section className='Partners-titles'>
        <div ref={containerTwo} className={isImgsVisible ? 'push-right swing-left' : 'push-right'}>
          <img src='/assets/group-2.jpg' className='Partners-main-img' />
        </div>
        <div ref={container} className={isTitleVisible ? 'push-left swing-right' : 'push-left'}>
          <h1>Partnerships</h1>
          <h3>Helping more of your customers reach checkout doesn't have to be difficult. Using a design thinking approach to better understand your customers needs, and how your target audience views your brand, is paramount to your long term success.</h3>

          <p className='meet-partners'>Meet our partners &darr;</p>
        </div>
      </section>

      <div ref={containerThree} className={isPartnersVisible ? 'icons clear fade-in' : 'icons clear'}>
        <img src={BIG_ICON} />
        <img src={NICE_ICON} />
        <FaAlgolia />
        <FaShopify />
        <FaAws />
        <FaAngellist />
      </div>
    </main>
  )
}

export default Partners