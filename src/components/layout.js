import React from "react"
import { Link } from "gatsby"

import Nav from "../components/nav"
import "../styles/layout.css"

const Layout = ({location, children}) => (
  <div className="layout-grid-container">
    <Nav currentLocation={location}/>
    <NameBanner/>
    <div className="page-content">
      {children}
    </div>
  </div>
)

const NameBanner = () => (
  <div className='name-banner'>
    <Link to="/contact"><h2>{"Let's talk"}</h2></Link>
    <h2>{"Laura Cutler"}</h2>
  </div>
)


export default Layout
