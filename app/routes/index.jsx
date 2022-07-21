import {
  links as primaryLandingLinks,
  LandingPage,
} from '../components/landing-page';
import { useLoaderData } from '@remix-run/react';

export function links() {
  return [...primaryLandingLinks()];
}

export const loader = async ({ request }) => {
  const url = new URL(request.url);
  const scrollTo = url.searchParams.get('to');

  const data = { scrollTo };

  return data;
};

export default function Index() {
  const { scrollTo } = useLoaderData();

  return <LandingPage scrollTo={scrollTo} />;
}
