import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
  return [{ title: 'Contact' }, { name: 'description', content: 'Contact' }];
};

export default function Contact() {
  return <div className="text-white">Contact</div>;
}
