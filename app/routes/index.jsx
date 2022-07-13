import LandingPage from '../components/LandingPage';
import { links as primaryLandingLinks } from '../components/LandingPage/LandingPage'

export function links() {
  return [
    ...primaryLandingLinks(),
  ];
}

export default function Index() {
  return (
    <LandingPage />
  );
}
