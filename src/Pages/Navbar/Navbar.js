import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const menuItems = (
    <React.Fragment>
      <li>
        <HashLink to="/">Home</HashLink>
      </li>
      <li>
        <HashLink to="/#projects">Projects</HashLink>
      </li>
      <li>
        <HashLink to="/#skills">Skills</HashLink>
      </li>
      <li>
        <HashLink to="/#about-me">About Me</HashLink>
      </li>
      <li>
        <HashLink to="/#contact-me">Contact Me</HashLink>
      </li>
      <li>
        <HashLink to="/blogs">Blogs</HashLink>
      </li>
    </React.Fragment>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          HASANUZZAMAN
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{menuItems}</ul>
      </div>
      <div className="navbar-end">
        <a
          href="https://drive.google.com/file/d/1Im9xq6vd1tR66mwiM_6wOg1TyRVq7aCJ/view?usp=sharing"
          download="https://drive.google.com/file/d/1Im9xq6vd1tR66mwiM_6wOg1TyRVq7aCJ/view?usp=sharing"
          target="_blank"
          className="btn btn-ghost btn-outline text-white"
          rel="noreferrer"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default Navbar;
