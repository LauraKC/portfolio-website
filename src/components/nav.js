import React from "react"
import classNames from "classnames"
import { Link } from "gatsby"
import "../styles/nav.css"
import { useLocation } from "@reach/router"

const NavLink = ({ path, children }) => {
  const location = useLocation()
  const currentPath = stripRightSlash(location.pathname)
  return (
    <Link className={classNames("navlink", { active: currentPath === path })} to={path} >
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

const stripRightSlash = str => str.replace(/^(.+)\/$/, "")

export default Nav
