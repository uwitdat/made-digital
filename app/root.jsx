import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import styles from './styles/reset.css'
import globalStyles from './styles/globals.css'
import Nav from './components/Nav';
import { links as primaryNavLinks } from './components/Nav/Nav';

export const meta = () => ({
  charset: "utf-8",
  title: "Made Digital",
  viewport: "width=device-width,initial-scale=1",
});

export function links() {
  return [
    ...primaryNavLinks(),
    { rel: "stylesheet", href: styles },
    { rel: "stylesheet", href: globalStyles },
    { rel: "icon", href: "", type: "image/png" },
  ];
}


export default function App() {
  return (
    <Document>
      <Nav />
      <Outlet />
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
      <body style={{ position: 'relative', height: 'auto' }}>
        {children}
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
};