import React from "react"
import classNames from "classnames"
import { Link } from "gatsby"
import "../styles/nav.css"

const NavLink = ({ path, children }) => {
  const location = window.location.pathname
  return (
    <Link className={classNames("navlink", { active: location === path })} to={path} >
      {children}
    </Link>
  )
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