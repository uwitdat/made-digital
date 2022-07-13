import React from 'react'
import styles from './LandingPage.css'
import { Link } from '@remix-run/react';
import BG from '../../../public/assets/vg-7.jpg'

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

const LandingPage = () => {
  return (
    <div className="Landing">
      <main className="Main">
        <img src={BG} alt='digital background' className='Main-bg-img' />
        <section className='Main-content'>
          <h1>Made <span> Digital</span></h1>
          <h5>is a leading eCommerce agency that specializes in website strategy and development services.</h5>
          <Link to='#landingVideo'>
            <button>Learn More</button>
          </Link>
        </section>
      </main>

      <section className='LandingVideo' id='landingVideo' />
      <section className='LandingMoreInfo' />
    </div>
  )
}

export default LandingPage