import React from "react"
import Layout from "../components/layout"
import LauraPhoto from "../images/laura.jpg"

const message1 = `
I'm a Canadian UX designer currently living in Amstedam.
I recently made a change from Marketing into User Experience.
`
const message2 = `
I'm an enthusiastic UX designer driven to help people lead healthier lives
by creating simple, intuitive user experiences from inspiration to production.
With a passion for mental health and well-being, and a strong interest in
immersive designs and AR/VR/XR.
`

const AboutPage = () => (
  <Layout>
    <h1 style={{paddingBottom: "10px"}}>
      About<br/>
      <Ws/><Ws/><Ws/><span className="purple-underline">M</span>e
    </h1>
    <div>
      <img
        width="30%"
        style={{float: "left", paddingLeft: "5%", paddingRight: "5%"}}
        src={LauraPhoto}
      />
      <div style={{paddingRight: "5%"}}>
        <p>{message1}</p>
        <p>{message2}</p>
      </div>
    </div>
  </Layout>
)



const Ws = () => <span style={{"white-space": "pre-wrap"}}>{" "}</span>


export default AboutPage
