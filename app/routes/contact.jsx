import React, { useRef, useState } from 'react';
import styles from '../styles/contactPage.css';
import Input from '../components/input-w-label/input';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import emailjs from '@emailjs/browser';
import { data } from '../SEO';

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

export const meta = () => ({
  charset: 'utf-8',
  title: 'Contact Us',
  viewport: 'width=device-width,initial-scale=1',
  description: 'A leading eCommerce agency that specializes in website strategy and development services.',
  keywords: data
});

const Contact = () => {

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

    emailjs.sendForm('service_lgeapfc', 'template_lpm2p3j', form.current, 'tx_aPr5F2gj0cIdKQ')
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
    <div className='Contact'>
      <div
        ref={container}
        className={
          isVisible
            ? 'ContactForm fade-in'
            : 'ContactForm clear'
        }
      >
        <h1>
          Interested In Working <span>With Us?</span>
        </h1>
        <form ref={form} onSubmit={sendEmail}>
          <Input type={'name'} label={'What should we call you?'} ph='Full Name' />
          <Input type={'email'} label={"What's your email?"} ph='Email' />
          <Input type={'companyName'} label={"What's the name of your Company?"} ph='Company' />
          <Input type={'companyWebsite'} label={"What's your company's website?"} ph='Website' />
          <Input type={'eCommercePlatform'} label={'Which eCommerce platform are you using?'} ph='eCommerce Platform' />
          <Input type={'revenue'} label={"What's your eCommerce store's monthly revenue?"} ph='Monthly Revenue' />
          <Input type={'goals'} label={'What are two of your biggest goals for this year?'} ph='Goals' />
          <Input type={'other'} label={'Anything else we should know?'} ph='Additional Information' />
          <Input type={'startDate'} label={'When are you looking to get started?'} ph='Start Date' />
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

export default Contact;
