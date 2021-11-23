import React from "react"
import AnimatedTitle from "../components/animated-title"
import Layout from "../components/layout"
import { portfolioCircle } from "../styles/portfolio-circle.module.css"

const IndexPage = () => (
  <Layout>
    <AnimatedTitle/>
    <AnimatedCircle/>
  </Layout>
)

const AnimatedCircle = () => (
  <div className={portfolioCircle}>Portfolio</div>
)

export default IndexPage
