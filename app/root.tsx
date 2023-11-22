import { cssBundleHref } from '@remix-run/css-bundle';
import stylesheet from './tailwind.css';
import type { LinksFunction } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import Navbar from './components/NavBar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Education from './components/Education';
import Work from './components/Work';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: stylesheet },
];

export default function App() {
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
          <Hero />
          <Skills />
          <Education />
          <Work />
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
