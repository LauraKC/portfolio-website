import React from "react"
import Layout from "../components/layout"
import resumePhoto from "../images/cutler-resume.png"
import ContactMe from "../components/contact-me"
import PageTitle from "../components/page-title"

const ResumePage = () => (
  <Layout>
    <PageTitle><span className="purple-underline">M</span>y Resumé</PageTitle>
    <div style={{display: "flex", justifyContent: "center"}}>
      <a href="https://drive.google.com/file/d/19TSFBef6bJgdVQ2hlApsL86fjYxDxXa5/view?usp=sharing" target="_blank" rel="noreferrer">
        <img
          style={{
            width:"100%",
            maxWidth: "700px",
            borderRadius: "1%"
          }}
          src={resumePhoto} />
      </a>
    </div>
    <ContactMe />
  </Layout>
)

export default ResumePage
