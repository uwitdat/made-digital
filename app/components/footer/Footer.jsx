import styles from './Footer.css';

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

const Footer = () => {
  return (
    <footer className='Footer'>
      <p>© {new Date().getFullYear()} Made Digital.</p>
    </footer>
  )
}

export default Footer