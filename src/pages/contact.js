import React from "react"
import Layout from "../components/layout"
import { contactDetails, emailLink } from "./contact.module.css"
import ContactMe from "../components/contact-me"
import { myEmail } from "../constants"
import PageTitle from "../components/page-title"

const ContactPage = () => (
  <Layout>
    <PageTitle><span className="purple-underline">C</span>ontact Me</PageTitle>
    <div className={contactDetails}>
      <h3>How can I help?</h3>
      <p>
        {"I'm happy to connect. Whether to chat about design, AR/VR, tea, dogs, or about more serious topics. I am available for full-time UX and VUI design and research opportunities."}
      </p>
      <p>Shoot me an email at: <a className={emailLink} href={"mailto:" + myEmail}>{myEmail}</a>.</p>
      <ContactMe />
    </div>
  </Layout>
)

export default ContactPage
