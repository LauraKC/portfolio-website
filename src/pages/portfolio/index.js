import classNames from "classnames"
import { Link } from "gatsby"
import React from "react"
import Layout from "../../components/layout"
import iphoneImage from  "../../images/olive/iphone-welcome.png"
import millaiphoneImage from  "../../images/milla/milla_convo_screen.png"
import alexa from  "../../images/sage/alexa_cutout.png"
import ContactMe from "../../components/contact-me"
import ComingsoonImage from  "../../images/comingsoon_image.png"
import {
  projectButtonsContainer,
  projectButton,
  projectButtonOlive,
  projectButtonMilla,
  projectButtonComingsoon,
  projectButtonSage,
} from "./index.module.css"
import PageTitle from "../../components/page-title"


const PortfolioPage = () => (
  <Layout>
    <PageTitle>
      <span className='purple-underline'>P</span>ortfolio
    </PageTitle>

    <div className={projectButtonsContainer}>
      <OilveCard/>
      <MillaCard/>
      <SageCard/>
      <ComingSoonCard/>
    </div>
    <ContactMe />
  </Layout>
)

const OilveCard = () => (
  <Link
    to='/portfolio/olive'
    className={classNames(projectButton, projectButtonOlive)}
  >
    <h1>Olive</h1>
    <img height="60%" src={iphoneImage}/>
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
    <img height="60%" src={ComingsoonImage}/>
  </Link>
)

export default PortfolioPage
