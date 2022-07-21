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
  const page = url.searchParams.get('to');

  const data = { page };

  return data;
};

export default function Index() {
  const { page } = useLoaderData();

  return <LandingPage page={page} />;
}
