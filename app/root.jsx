import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import styles from './styles/reset.css';
import globalStyles from './styles/globals.css';
import { Nav, links as primaryNavLinks } from './components/Nav';
import { links as footerLinks } from './components/footer';

import { json } from '@remix-run/node';
import { data } from './SEO';

export const meta = () => ({
  charset: 'utf-8',
  title: 'Made Digital',
  viewport: 'width=device-width,initial-scale=1',
  description:
    'A leading eCommerce agency that specializes in website strategy and development services.',
  keywords: data,
});

export function links() {
  return [
    ...footerLinks(),
    ...primaryNavLinks(),
    // ...authLinks(),
    { rel: 'stylesheet', href: styles },
    { rel: 'stylesheet', href: globalStyles },
    { rel: 'icon', href: 'favicon.ico', type: 'image/png' },
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
  // const [authed, setAuthed] = useState(
  //   process.env.NODE_ENV === 'development' ||
  //     process.env.NODE_ENV === 'production'
  //     ? true
  //     : false
  // );
  // const data = useLoaderData();
  // const password = data.ENV.PASSWORD;

  // useEffect(() => {
  //   if (process.env.NODE_ENV === 'production') {
  //     window.scrollTo(0, 0);
  //   }
  // }, []);

  return (
    <Document>
      {/* {authed ? ( */}
      <React.Fragment>
        <Nav />
        <Outlet />
      </React.Fragment>
      {/* ) : (
        <Auth setAuthed={setAuthed} password={password} />
      )} */}
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
