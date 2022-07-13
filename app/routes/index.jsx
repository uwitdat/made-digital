import { links as primaryLandingLinks, LandingPage } from '../components/landing-page'

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
