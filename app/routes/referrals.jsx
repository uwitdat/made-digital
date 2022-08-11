import React, { useRef, useState } from 'react';
import styles from '../styles/referralsPage.css';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import Input from '../components/input-w-label/input';
import emailjs from '@emailjs/browser';
import { data } from '../SEO';
import { useLoaderData } from '@remix-run/react';
import { json } from '@remix-run/node';

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

export const meta = () => ({
  charset: 'utf-8',
  title: 'Refer A Client',
  viewport: 'width=device-width,initial-scale=1',
  description: 'A leading eCommerce agency that specializes in website strategy and development services.',
  keywords: data
});

export async function loader() {
  return json({
    ENV: {
      SERVICE_ID: process.env.EMAIL_JS_SERVICE_ID,
      PUBLIC_KEY: process.env.EMAIL_JS_PUBLIC_KEY,
      TEMPLATE_ID: process.env.EMAIL_JS_TEMPLATE_ID_REFFERAL
    },
  });
}

const Referrals = () => {
  const data = useLoaderData();

  const options = {
    root: null,
    rootMargin: '10px',
    threshold: 0,
  };

  const [container, isVisible] = useIntersectionObserver(options);
  const [success, setSuccess] = useState(false)
  const [fade, setFade] = useState(false)

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(data.ENV.SERVICE_ID, data.ENV.TEMPLATE_ID, form.current, data.ENV.PUBLIC_KEY)
      .then((result) => {
        if (result.text === 'OK') {
          handleSuccess()
        }
      }, (error) => {
        console.log(error.text);
      });
  };

  const handleSuccess = () => {
    setSuccess(true)

    setTimeout(() => {

      setFade(true)
    }, 3000)

    setTimeout(() => {
      setFade(false)
      setSuccess(false)
    }, 4000)
  }


  return (
    <div className="Referrals">
      <div
        ref={container}
        className={
          isVisible
            ? 'referrals-container fade-in'
            : 'referrals-container clear'
        }
      >
        <h1>
          Refer a <span>Merchant</span> to us
        </h1>
        <p>Know any merchants that need our services? Introduce us and enjoy the rewards of our Partner Referral Program.</p>
        <form ref={form} onSubmit={sendEmail}>
          <Input type={'firstName'} label={'First Name'} ph='First Name' />
          <Input type={'lastName'} label={'Last Name'} ph='Last Name' />
          <Input type={'businessEmail'} label={'Business Email'} ph={'Business Email'} />
          <Input type={'businessWebsite'} label={'Business Website'} ph={'Business Website'} />
          <Input type={'annualRevenue'} label={'Annual Revenue'} ph={'Annual Revenue'} />
          <Input type={'eCommercePlatform'} label={'E-Commerce Platform'} ph={'E-Commerce Platform'} />
          <Input type={'country'} label={'Country'} ph={'Country'} />
          <Input type={'referral'} label={'What company/party referred you?'} ph={'What company/party referred you?'} />
          <button disabled={success} type="submit">Submit</button>
        </form>
      </div>
      {success && (
        <div className={fade ? 'success-modal exit-modal' : 'success-modal'}>
          <p>We'll be in touch! 🎉</p>
        </div>
      )}
    </div>
  );
};

export default Referrals;
