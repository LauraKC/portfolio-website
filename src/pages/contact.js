import React from "react"
import Layout from "../components/layout"
import { contactDetails } from "./contact.module.css"
import ContactMe from "../components/contact-me"

const ContactPage = () => (
  <Layout>
    <h1 style={{paddingBottom: "10%"}}><span className="purple-underline">C</span>ontact Me</h1>
    <div className={contactDetails}>
      <h3>How can I help you?</h3>
      <p>
        {"I'm happy to connect. Whether to chat about design, AR/VR, tea, dogs, or about more serious topics. I am available for full-time UX and VUI design and research opportunities."}
      </p>
      <p>I'd love to hear from you!</p>
      <ContactMe />
    </div>
  </Layout>
)

export default ContactPage
