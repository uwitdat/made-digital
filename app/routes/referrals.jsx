import React from 'react';
import styles from '../styles/referralsPage.css';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useTransition } from '@remix-run/react';
import { useSubmit } from '@remix-run/react';
import { Form } from '@remix-run/react';
import Input from '../components/input-w-label/input';

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

export async function action({ request }) {
  const formData = await request.formData();

  console.log(formData);
  return null;
}

const Referrals = () => {
  const submit = useSubmit();

  const options = {
    root: null,
    rootMargin: '10px',
    threshold: 0,
  };

  const [container, isVisible] = useIntersectionObserver(options);

  function handleChange(event) {
    const { state, type, submission, location } = useTransition();

    console.log(state, type, submission, location);
    submit(event.currentTarget, { replace: true });
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
          Tell Us <span>About You</span>
        </h1>
        <Form method="post" onChange={handleChange}>
          <Input type={'firstName'} label={'First Name'} ph='First Name' />
          <Input type={'lastName'} label={'Last Name'} ph='Last Name' />
          <Input type={'businessEmail'} label={'Business Email'} ph={'Business Email'} />
          <Input type={'businessWebsite'} label={'Business Website'} ph={'Business Website'} />
          <Input type={'annualRevenue'} label={'Annual Revenue'} ph={'Annual Revenue'} />
          <Input type={'eCommercePlatform'} label={'E-Commerce Platform'} ph={'E-Commerce Platform'} />
          <Input type={'country'} label={'Country'} ph={'Country'} />
          <Input type={'referral'} label={'What company/party referred you?'} ph={'What company/party referred you?'} />
          <button type="submit">Submit</button>
        </Form>
      </div>
    </div>
  );
};

export default Referrals;
