import classNames from "classnames"
import { Link } from "gatsby"
import React from "react"
import Layout from "../../components/layout"
import "../../styles/portfolio.css"
import iphoneImage from  "../../images/olive/iphone-welcome.png"
import millaiphoneImage from  "../../images/milla/milla_convo_screen.png"
import treeImage from  "../../images/olive/tree.svg"
import ContactMe from "../../components/contact-me"


const PortfolioPage = () => (
  <Layout pageContentClassName={"hello"}>
    <div className='portfolio-content-container'>
      <h1>
        <span className='purple-underline'>P</span>ortfolio
      </h1>

      <div className="project-buttons-container" style={{paddingBottom: "50px"}}>
        <OilveCard/>
        <MillaCard/>
        <ComingSoonCard/>
      </div>
      <ContactMe />
    </div>
  </Layout>
)

const OilveCard = () => (
  <Link
    to='/portfolio/olive'
    className={classNames("project-button", "project-button-olive")}
  >
    <h1>Olive</h1>
    <img className='olive-iphone-image' height="60%" src={iphoneImage}/>
    <img className='olive-tree-image' height="60%" src={treeImage}/>
  </Link>
)

const MillaCard = () => (
  <Link  
    to='/portfolio/milla'
    className={classNames("project-button", "project-button-milla")}
  >
    <h1>MILLA</h1>
    <img className='milla-iphone-image' height="60%" src={millaiphoneImage}/>
  </Link>
)

const ComingSoonCard = () => (
  <Link className={classNames("project-button", "project-button-comingsoon")}>
    <h1>Coming Soon</h1>
  </Link>
)

export default PortfolioPage
