import React from 'react';
import styles from '../styles/contactPage.css';
import { Form } from '@remix-run/react';
import Input from '../components/input-w-label/input';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}
const Contact = () => {

  const options = {
    root: null,
    rootMargin: '10px',
    threshold: 0,
  };

  const [container, isVisible] = useIntersectionObserver(options);

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
        <Form method="post">
          <Input type={'name'} label={'What should we call you?'} />
          <Input type={'email'} label={"What's your email?"} />
          <Input type={'companyName'} label={"What's the name of your Company?"} />
          <Input type={'companywebsite'} label={"What's your company's website?"} />
          <Input type={'eCommercePlatform'} label={'Which eCommerce platform are you using?'} />
          <Input type={'revenue'} label={"What's your eCommerce store's monthly revenue?"} />
          <Input type={'goals'} label={'What are two of your biggest goals for this year?'} />
          <Input type={'goals'} label={'What are two of your biggest goals for this year?'} />
          <Input type={'other'} label={'Anything else we should know?'} />
          <Input type={'startDate'} label={'When are you looking to get started?'} />
          <button type="submit">Submit</button>
        </Form>
      </div>
    </div>

  );
};

export default Contact;
