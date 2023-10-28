import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
  return [{ title: 'About' }, { name: 'description', content: 'About' }];
};

export default function About() {
  return <div className="text-white">About me page</div>;
}
