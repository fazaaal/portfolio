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

// export async function loader() {
//   checkEnvVars();
//   const response = await fetch(`${process.env.STRAPI_URL_BASE}/api/about-me`, {
//     method: 'GET',
//     headers: {
//       Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
//       //'Content-Type': 'application/json',
//     },
//   });

//   checkStatus(response); // check the status

//   const data = await response.json(); // get the json response

//   if (data.error) {
//     // error check
//     throw new Response('Error loading data', { status: 500 });
//   }

//   const aboutme = data.data.attributes;
//   //console.log(data.data.attributes);

//   // console.log(aboutme);
//   return json(aboutme);
// }
