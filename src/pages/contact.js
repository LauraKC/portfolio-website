import React from "react"
import Layout from "../components/layout"
import { contactDetails } from "./contact.module.css"

const ContactPage = () => (
  <Layout>
    <h1><span className="purple-underline">C</span>ontact</h1>
    <div className={contactDetails}>
      <a href="https://www.linkedin.com/in/lauracutler/"><h2>LinkedIn</h2></a>
      <a><h2>Dribble</h2></a>
    </div>
  </Layout>
)

export default ContactPage
