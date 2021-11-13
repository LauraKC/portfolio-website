import * as React from "react"
import Nav from '../components/nav'

const NameBanner = () => (
  <div class='name-banner'>
    <div class='lets-talk'>
      <div class='grey-circle'></div>
      <h3>Let's talk</h3>
    </div>
    <h2>Laura Cutler</h2>
  </div>
)

const IndexPage = () => (
  <>
    <Nav/>
    <div class="grid-container">
      <NameBanner/>
      <div class="animated-title">
        <h1>Creating</h1>
        <h1>remarkable</h1>
        <h1>digital</h1> 
        <h1>experiences</h1>
      </div>
    </div>
    <div class="portfolio-circle" a href="#portfolio">Portfolio</div>
  </>
)

export default IndexPage
