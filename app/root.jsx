import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import styles from './styles/reset.css';
import React, { useState } from 'react';
import globalStyles from './styles/globals.css';
import { Nav, links as primaryNavLinks } from './components/Nav';
import { links as footerLinks } from './components/footer';
import { Auth, links as authLinks } from './components/auth';
import { useLoaderData } from '@remix-run/react';
import { json } from '@remix-run/node';

export const meta = () => ({
  charset: 'utf-8',
  title: 'Made Digital |',
  viewport: 'width=device-width,initial-scale=1',
});

export function links() {
  return [
    ...footerLinks(),
    ...primaryNavLinks(),
    ...authLinks(),
    { rel: 'stylesheet', href: styles },
    { rel: 'stylesheet', href: globalStyles },
    { rel: 'icon', href: '#', type: 'image/png' },
  ];
}

export async function loader() {
  return json({
    ENV: {
      PASSWORD: process.env.PASSWORD,
    },
  });
}

export default function App() {
  const [authed, setAuthed] = useState(process.env.NODE_ENV === 'development' ? true : false);
  const data = useLoaderData();
  const password = data.ENV.PASSWORD;

  return (
    <Document>
      {authed ? (
        <React.Fragment>
          <Nav />
          <Outlet />
        </React.Fragment>
      ) : (
        <Auth setAuthed={setAuthed} password={password} />
      )}
    </Document>
  );
}

const Document = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body
        style={{ position: 'relative', height: 'auto', overflowX: 'hidden' }}
      >
        {children}
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  );
};
