import React from "react"
import Layout from "../components/layout"
import resumePhoto from "../images/cutler-resume.png"
import ContactMe from "../components/contact-me"

const ResumePage = () => (
  <Layout>
    <h1 style={{paddingBottom: "10%"}}><span className="purple-underline">M</span>y Resumé</h1>
        <a href="https://drive.google.com/file/d/19TSFBef6bJgdVQ2hlApsL86fjYxDxXa5/view?usp=sharing" target="_blank">
          <img
            style={{
              float: "center",
              width:"100%",
              marginRight: "20%",
              borderRadius: "1%"
            }}
            src={resumePhoto} />
        </a>
      <ContactMe />
  </Layout>
)

export default ResumePage