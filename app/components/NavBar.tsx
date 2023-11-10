import { Link } from '@remix-run/react';
import Skills from './Skills';
import Hero from './Hero';
import Education from './Education';

export default function Navbar() {
  const Nav = [
    { id: 1, title: 'Home', url: '/' },
    { id: 2, title: 'About', url: '#about' },
    { id: 3, title: 'Contact', url: '#contact' },
  ];
  return (
    // <div>
    //   <div className="bg-black border-b-[1px] py-3 grid grid-cols-1 ">
    //     <div className=" border-gray-800 text-gray-300  flex flex-row justify-center transition-all">
    //       {Nav.map((NavItem) => (
    //         <NavLink
    //           key={NavItem.id}
    //           className={({ isActive, isPending }) =>
    //             isActive
    //               ? 'flex flex-row px-4 py-1 mx-2  transition-all rounded-2xl font-normal text-white bg-gray-900'
    //               : 'flex flex-row px-4 py-1 mx-2 hover:text-white transition-all rounded-2xl font-normal text-slate-400 hover:bg-gray-900'
    //           }
    //           // className="flex flex-row px-4 py-2 mx-2 hover:text-white transition-all rounded-md font-semibold"
    //           to={NavItem.url}
    //         >
    //           {NavItem.title}
    //         </NavLink>
    //       ))}
    //     </div>
    //   </div>
    //   <div className="bg-black border-b-[1px] py-3 grid grid-cols-1 sm:hidden">
    //     sup
    //   </div>
    // </div>
    <div className="drawer">
      <input
        id="my-drawer-3"
        type="checkbox"
        className="drawer-toggle drawer-overlay"
      />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar bg-base-300">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-1 px-2 mx-2">Ahmed Fazal</div>
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal">
              {/* Navbar menu content here */}
              {Nav.map((NavItem) => (
                <Link
                  key={NavItem.id}
                  className="hover:text-[#64ffda] text-slate-500 mx-2 transition-all"
                  // className="flex flex-row px-4 py-2 mx-2 hover:text-white transition-all rounded-md font-semibold"
                  to={NavItem.url}
                >
                  {NavItem.title}
                </Link>
              ))}
            </ul>
          </div>
        </div>
        {/* Page content here */}
        <Hero />
        <Education />
        <Skills />
      </div>
      <div className="drawer-side h-full">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-slate-100">
          {/* Sidebar content here */}
          {Nav.map((NavItem) => (
            <Link
              key={NavItem.id}
              className="hover:text-[#64ffda] text-slate-500 mx-2 transition-all text-2xl py-3 bg-slate-300 rounded-md px-3 my-1 "
              // className="flex flex-row px-4 py-2 mx-2 hover:text-white transition-all rounded-md font-semibold"
              to={NavItem.url}
            >
              {NavItem.title}
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}
