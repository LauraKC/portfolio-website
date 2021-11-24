import { Link } from "gatsby"
import React from "react"
import AnimatedTitle from "../components/animated-title"
import Layout from "../components/layout"
import { container, portfolioCircle } from "./index.module.css"

const IndexPage = () => (
  <Layout>
    <div className={container} >
      <AnimatedTitle/>
      <AnimatedCircle/>
    </div>
  </Layout>
)

const AnimatedCircle = () => (
  <Link to="/portfolio" className={portfolioCircle}>Portfolio</Link>
)

export default IndexPage
