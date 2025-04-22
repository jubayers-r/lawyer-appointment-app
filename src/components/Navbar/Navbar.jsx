import React from "react";
import { NavLink } from "react-router";
import logo from "/src/assets/logo.png";
import "./navbar.css";

export const navlinks = [
  { to: "/", label: "Home" },
  { to: "/bookings", label: "My-Bookings" },
  { to: "/blogs", label: "Blogs" },
  { to: "/contact", label: "Contact Us" },
];

const Navbar = () => {
  return (
    <div className="navbar w-9/11 mx-auto py-4">
      <div className="navbar-start">
        <div className="flex gap-3 py-3 items-center">
          <div className="max-w-7 min-w-4 sm:max-w-full">
            <img src={logo} alt="" />
          </div>
          <h3 className="font-black text-xl sm:text-3xl text-black/80 font-[Plus_Jakarta_Sans]">
            Law.USA
          </h3>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal gap-9 xl:text-lg">
          {navlinks.map((link) => (
            <NavLink key={link.to} to={link.to}>
              {link.label}
            </NavLink>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        <button className="hidden sm:flex btn btn-ghost p-6 rounded-full bg-[#0EA106] text-white xl:text-lg">
          Contact Now
        </button>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden mr-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="text-center menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navlinks.map((link) => (
              <NavLink key={link.to} to={link.to}>
                {link.label}
              </NavLink>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
