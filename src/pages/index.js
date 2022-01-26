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
      <p>{"Driven to help people lead happier, healthier lives through creating simple, intuitive user experiences. Passionate about mental health & well-being, and new technologies in AR/VR/XR."}</p>
    </div>
  </Layout>
)

const AnimatedCircle = () => (
  <Link to="/portfolio" className={portfolioCircle}>Portfolio</Link>
)

export default IndexPage
