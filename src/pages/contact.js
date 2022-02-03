import React from "react"
import Layout from "../components/layout"
import { contactDetails } from "./contact.module.css"
import ContactMe from "../components/contact-me"

const ContactPage = () => (
  <Layout>
    <h1><span className="purple-underline">C</span>ontact me</h1>
    <div className={contactDetails}>
      <h3>Want me on your team?</h3>
      <p>I'm currently open to User Experience Research and User Experience Design opportunities. Just say hi!</p>
      <ContactMe />
    </div>
  </Layout>
)

export default ContactPage
