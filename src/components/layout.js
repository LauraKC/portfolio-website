import React from "react"
import { Link } from "gatsby"

import Nav from "../components/nav"
import {
  layoutContainer,
  pageContent,
  nameBanner
} from "./layout.module.css"

const Layout = ({location, children}) => (
  <>
    <div className={layoutContainer}>
      <Nav currentLocation={location}/>
      <div className={pageContent}>
        {children}
      </div>
    </div>
    <NameBanner/>
  </>
)

const NameBanner = () => (
  <div className={nameBanner}>
    <Link to="/contact"><h2>{"Let's talk"}</h2></Link>
    <h2>{"Laura Cutler"}</h2>
  </div>
)


export default Layout
