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
  <div className={portfolioCircle}>Portfolio</div>
)

export default IndexPage
