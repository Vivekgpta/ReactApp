import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
  const Links = [
    { path: "/", title: "Home" },
    { path: "/about", title: "About" },
    { path: "/contact", title: "Contact" },
    { path: "/user", title: "User" },
    { path: "/login", title: "Login" },
  ];

  

  return (
    <div className='navbar'>
      {Links.map(({ path, title }) => (
        <NavLink
          key={path}
          to={path}
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          {title}
        </NavLink>
      ))}
    </div>
  );
}

export default NavBar;
