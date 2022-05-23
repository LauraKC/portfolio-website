import React from "react"
import { Link } from "gatsby"
import { navStyle, navLink, navLinkActive } from "./nav.module.css"
import { useLocation } from "@reach/router"

const NavLink = ({ path, children }) => {
  const location = useLocation()
  const currentPath = location.pathname
  return (
    <Link
      className={matches(path, currentPath) ? navLinkActive : navLink }
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
      <NavLink path="/resume">Resumé</NavLink>
    </nav>
  )
}

const matches = (path, currentPath) => {
  const tokens = p => p.split("/").filter(isTruthy)
  return arraysEqual(tokens(path), tokens(currentPath))
}
const arraysEqual = (xs, ys) => (
  xs.length === ys.length
  && zipWith(strictEqual, xs, ys).every(isTruthy)
)
const zipWith = (f, xs, ys) => xs.map((x, i) => f(x, ys[i]))
const strictEqual = (x, y) => x === y
const isTruthy = x => Boolean(x)

export default Nav
