import React from "react"
import { Link } from "gatsby"

import Nav from "../components/nav"
import AnimatedTitle from "../components/animated-title"
import "../styles/index.css"
import "../styles/portfolio-circle.css"

const NameBanner = () => (
  <div className='name-banner'>
    <Link to="/contact"><h2>{"Let's talk"}</h2></Link>
    <h2>{"Laura Cutler"}</h2>
  </div>
)

const AnimatedCircle = () => (
  <div className="portfolio-circle" a href="#portfolio">Portfolio</div>
)

const IndexPage = () => (
  <>
    <Nav />
    <div className="grid-container">
      <NameBanner/>
      <AnimatedTitle/>
    </div>
    <AnimatedCircle/>
  </>
)

export default IndexPage
