import { type MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
  return [
    { title: 'Ahmed Fazal' },
    { name: 'description', content: 'Welcome to my portfolio!' },
  ];
};

export default function Index() {
  // const aboutme = useLoaderData<typeof loader>();
}
