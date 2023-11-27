import { cssBundleHref } from '@remix-run/css-bundle';
import stylesheet from './tailwind.css';
import { json, type LinksFunction } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from '@remix-run/react';
import Navbar from './components/NavBar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Education from './components/Education';
import Work from './components/Work';
import { checkEnvVars, checkStatus } from './utils/errorHandling';
import { fetchData, getData } from './data/strapi.server';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: stylesheet },
];

export default function App() {
  const aboutme: any = useLoaderData<typeof loader>().aboutme;
  const skills = useLoaderData<typeof loader>().skills;
  const edu = useLoaderData<typeof loader>().education;
  const exp = useLoaderData<typeof loader>().experiences;
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="">
        <Navbar />
        <div className="h-[75%] overflow-y-auto">
          <Hero aboutme={aboutme} />
          <Skills skills={skills} />
          <Education education={edu} />
          <Work experiences={exp} />
          <footer className="footer footer-center p-4 bg-base-300 ">
            <aside>
              <p>Copyright © 2023</p>
            </aside>
          </footer>
        </div>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export async function loader() {
  return fetchData();
}
