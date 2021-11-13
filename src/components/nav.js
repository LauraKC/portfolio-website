import * as React from "react"

const Nav = () => {
  const location = window.location.pathname
  return (
    <nav>
      <a className={location === '/' ? "active" : ""} href="/">Home</a>
      <a className={location === '/portfolio' ? "active" : ""} href="/portfolio">Portfolio</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
    </nav>
  )
}

export default Nav