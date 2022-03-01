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
      <p>{"Hello, I'm Laura a marketer-turned UX designer with a desire to help people lead happier, healthier lives through designing simple, intuitive user experiences with a sprinkle of delight. I'm passionate about mental health & well-being, and new technologies in AR/VR/XR."}</p>
    </div>
  </Layout>
)

const AnimatedCircle = () => (
  <Link to="/portfolio" className={portfolioCircle}>Portfolio</Link>
)

export default IndexPage
