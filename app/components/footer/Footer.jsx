import styles from './Footer.css';

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}
const Footer = () => {
  return (
    <footer className="Footer">
      <p>© {new Date().getFullYear()}</p>
      <img src="/assets/made-logo-white.png" alt="Made Digital logo" />
    </footer>
  );
};

export default Footer;
