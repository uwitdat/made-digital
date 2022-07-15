import React from 'react'
import styles from '../styles/referralsPage.css'


export function links() {
  return [
    { rel: "stylesheet", href: styles },
  ];
}

const Referrals = () => {
  return (
    <div className='Referrals'>
      <div className='referrals-container'>
        <h1>Tell Us <span>About You</span></h1>
        <form>
          <label htmlFor='firstName'>First Name</label>
          <div>
            <input name='firstName' id='firstName' placeholder='First name' />
          </div>

          <label htmlFor='lastName'>Last Name</label>
          <div>
            <input name='lastName' id='lastName' placeholder='Last name' />
          </div>

          <label htmlFor='businessEmail'>Business Email</label>

          <div>
            <input name='businessEmail' id='businessEmail' placeholder='Business  Email' />
          </div>

          <label htmlFor='businessWebsite'>
            Business  Website
          </label>

          <div>
            <input name='businessWebsite' id='businessWebsite' placeholder='Business  Website' />
          </div>

          <label htmlFor='annualRevenue'>
            Annual Revenue
          </label>

          <div>
            <input name='annualRevenue' id='annualRevenue' placeholder='Annual Revenue' />
          </div>



          <label htmlFor='eCommercePlatform'>E-Commerce Platform</label>
          <div>
            <input name='eCommercePlatform' id='eCommercePlatform' placeholder='E-Commerce Platform' />
          </div>



          <label htmlFor='country'>Country</label>
          <div>
            <input name='country' id='country' placeholder='Country' />
          </div>


          <label htmlFor='referral'>What company/party referred you?</label>

          <div>
            <input name='referral' id='referral' placeholder='What company/party referred you?' />
          </div>


          <button>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Referrals;