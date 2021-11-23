import React from "react"
import { Link } from "gatsby"
import { navStyle, navLink, navLinkActive } from "./nav.module.css"
import { useLocation } from "@reach/router"

const NavLink = ({ path, children }) => {
  const location = useLocation()
  const currentPath = stripRightSlash(location.pathname)
  return (
    <Link
      className={currentPath === path ? navLinkActive : navLink }
      to={path}
    >
      {children}
    </Link>
  )
}

const Nav = () => {
  return (
    <nav className={navStyle}>
      <NavLink path="/">Home</NavLink>
      <NavLink path="/portfolio">Portfolio</NavLink>
      <NavLink path="/about">About</NavLink>
      <NavLink path="/contact">Contact</NavLink>
    </nav>
  )
}

const stripRightSlash = str => str.replace(/^(.+)\/$/, "")

export default Nav
