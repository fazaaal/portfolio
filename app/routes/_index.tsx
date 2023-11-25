import { json, type MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { checkEnvVars, checkStatus } from '../utils/errorHandling';
import Hero from '~/components/Hero';

export const meta: MetaFunction = () => {
  return [
    { title: 'Ahmed Fazal' },
    { name: 'description', content: 'Welcome to my portfolio!' },
  ];
};

export default function Index() {
  // const aboutme = useLoaderData<typeof loader>();
}
