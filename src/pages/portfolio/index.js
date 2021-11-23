import classNames from "classnames"
import { Link } from "gatsby"
import React from "react"
import Layout from "../../components/layout"
import "../../styles/portfolio.css"
import iphoneImage from  "../../images/olive/iphone-welcome.png"
import treeImage from  "../../images/olive/tree.svg"


const PortfolioPage = () => (
  <Layout pageContentClassName={"hello"}>
    <div className='portfolio-content-container'>
      <h1>
        <span className='purple-underline'>P</span>ortfolio
      </h1>

      <div className="project-buttons-container">
        <OilveCard/>
        <MillaCard/>
      </div>
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
  <Link className={classNames("project-button", "project-button-milla")}>
    <h1>Milla</h1>
    <h2>Coming Soon</h2>
  </Link>
)

export default PortfolioPage
