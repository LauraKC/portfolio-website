import * as React from "react"

const NavLink = ({ path, children }) => {
  const location = window.location.pathname
  return <a className={location === path ? "active" : ""} href={path}>{children}</a>
}

const Nav = () => {
  return (
    <nav>
      <NavLink path="/">Home</NavLink>
      <NavLink path="/portfolio">Portfolio</NavLink>
      <NavLink path="/about">About</NavLink>
      <NavLink path="/contact">Contact</NavLink>
    </nav>
  )
}

export default Nav
