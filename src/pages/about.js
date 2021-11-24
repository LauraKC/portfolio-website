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

const pStyle = { fontSize: "2.2vw" }

const AboutPage = () => (
  <Layout>
    <h1 style={{paddingBottom: "10px"}}>
      About<br/>
      <Ws/><Ws/><Ws/><span className="purple-underline">M</span>e
    </h1>
    <div>
      <img
        style={{
          width:"30%",
          float: "left",
          marginLeft: "5%",
          marginRight: "5%",
          borderRadius: "5%"
        }}
        src={LauraPhoto}
      />
      <div style={{marginRight: "5%"}}>
        <p style={pStyle}>{message1}</p>
        <p style={pStyle}>{message2}</p>
      </div>
    </div>
  </Layout>
)



const Ws = () => <span style={{"white-space": "pre-wrap"}}>{" "}</span>


export default AboutPage
