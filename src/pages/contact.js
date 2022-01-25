import React from "react"
import Layout from "../components/layout"
import { contactDetails } from "./contact.module.css"
import { myEmail, myLinkedin } from "../constants"
import ContactMe from "../components/contact-me"

const ContactPage = () => (
  <Layout>
    <h1><span className="purple-underline">C</span>ontact me</h1>
    <div className={contactDetails}>
      <h2>Want me on your team?</h2>
      <ContactMe />
    </div>
  </Layout>
)

export default ContactPage
