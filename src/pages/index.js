import React from "react"
import AnimatedTitle from "../components/animated-title"
import Layout from "../components/layout"
import "../styles/index.css"
import "../styles/portfolio-circle.css"

const IndexPage = () => (
  <Layout>
    <AnimatedTitle/>
    <AnimatedCircle/>
  </Layout>
)

const AnimatedCircle = () => (
  <div className="portfolio-circle" a href="#portfolio">Portfolio</div>
)

export default IndexPage
