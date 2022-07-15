import React from 'react'
import styles from '../styles/contactPage.css';
import { Widget } from '@typeform/embed-react'
import { useLoaderData } from '@remix-run/react';
import { json } from '@remix-run/node';

export function links() {
  return [
    { rel: "stylesheet", href: styles },
  ];
}

export async function loader() {
  return json({
    ENV: {
      TYPEFORM_ID: process.env.TYPEFORM_ID,
    },
  });
}


const Contact = () => {
  const data = useLoaderData();
  return (
    <div className='Contact'>
      <Widget id={data.ENV.TYPEFORM_ID} style={{ width: '60%', height: '70%' }} className="my-form" />
    </div>
  )
}

export default Contact