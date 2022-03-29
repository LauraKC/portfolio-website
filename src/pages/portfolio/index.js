import classNames from "classnames"
import { Link } from "gatsby"
import React from "react"
import Layout from "../../components/layout"
import iphoneImage from  "../../images/olive/iphone-welcome.png"
import millaiphoneImage from  "../../images/milla/milla_convo_screen.png"
import treeImage from  "../../images/olive/tree.svg"
import alexa from  "../../images/sage/alexa_cutout.png"
import ContactMe from "../../components/contact-me"
import {
  projectContentContainer,
  projectButtonsContainer,
  projectButton,
  projectButtonOlive,
  projectButtonMilla,
  projectButtonComingsoon,
  oliveIphoneImage,
  oliveTreeImage,
  projectButtonSage,
} from "./index.module.css"


const PortfolioPage = () => (
  <Layout pageContentClassName={"hello"}>
    <div className={projectContentContainer}>
      <h1 style={{paddingBottom: "10%"}}>
        <span className='purple-underline'>P</span>ortfolio
      </h1>

      <div className={projectButtonsContainer} style={{paddingBottom: "50px"}}>
        <OilveCard/>
        <MillaCard/>
        <SageCard/>
        <ComingSoonCard/>
      </div>
      <ContactMe />
    </div>
  </Layout>
)

const OilveCard = () => (
  <Link
    to='/portfolio/olive'
    className={classNames(projectButton, projectButtonOlive)}
  >
    <h1>Olive</h1>
    <img className={oliveIphoneImage} height="60%" src={iphoneImage}/>
    <img className={oliveTreeImage} height="60%" src={treeImage}/>
  </Link>
)

const MillaCard = () => (
  <Link
    to='/portfolio/milla'
    className={classNames(projectButton, projectButtonMilla)}
  >
    <h1>MILLA</h1>
    <img height="60%" src={millaiphoneImage}/>
  </Link>
)

const SageCard = () => (
  <Link
    to='/portfolio/sage'
    className={classNames(projectButton, projectButtonSage)}
  >
    <h1>Sage</h1>
    <img height="60%" src={alexa}/>
  </Link>
)

const ComingSoonCard = () => (
  <Link className={classNames(projectButton, projectButtonComingsoon)}>
    <h1>Coming Soon</h1>
  </Link>
)

export default PortfolioPage
