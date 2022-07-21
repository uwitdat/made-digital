import React from 'react';
import styles from '../styles/referralsPage.css';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useTransition } from '@remix-run/react';
import { useSubmit } from '@remix-run/react';
import { Form } from '@remix-run/react';

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
    threshold: 0.5,
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
          <label htmlFor="firstName">First Name</label>
          <div>
            <input name="firstName" id="firstName" placeholder="First name" />
          </div>

          <label htmlFor="lastName">Last Name</label>
          <div>
            <input name="lastName" id="lastName" placeholder="Last name" />
          </div>

          <label htmlFor="businessEmail">Business Email</label>
          <div>
            <input
              name="businessEmail"
              id="businessEmail"
              placeholder="Business  Email"
            />
          </div>

          <label htmlFor="businessWebsite">Business Website</label>
          <div>
            <input
              name="businessWebsite"
              id="businessWebsite"
              placeholder="Business  Website"
            />
          </div>

          <label htmlFor="annualRevenue">Annual Revenue</label>
          <div>
            <input
              name="annualRevenue"
              id="annualRevenue"
              placeholder="Annual Revenue"
            />
          </div>

          <label htmlFor="eCommercePlatform">E-Commerce Platform</label>
          <div>
            <input
              name="eCommercePlatform"
              id="eCommercePlatform"
              placeholder="E-Commerce Platform"
            />
          </div>

          <label htmlFor="country">Country</label>
          <div>
            <input name="country" id="country" placeholder="Country" />
          </div>

          <label htmlFor="referral">What company/party referred you?</label>
          <div>
            <input
              name="referral"
              id="referral"
              placeholder="What company/party referred you?"
            />
          </div>
          <button type="submit">Submit</button>
        </Form>
      </div>
    </div>
  );
};

export default Referrals;
