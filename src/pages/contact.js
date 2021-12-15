import React from "react"
import Layout from "../components/layout"
import { contactDetails } from "./contact.module.css"

const ContactPage = () => (
  <Layout>
    <h1><span className="purple-underline">C</span>ontact</h1>
    <div className={contactDetails}>
      <p>Want me on your team?</p>
      <p>I’m currently available for hire in the Americas. Do I sound like a good fit for your team? Send me a note and let’s talk. You can also find me on LinkedIn or email me directly.</p>
      <p>
        <b>Location: </b>Currently Canada.
        Open to relocation.
      </p>
      <p>
        <b>Other Professional Hangouts: </b>
        <a href="https://www.linkedin.com/in/lauracutler/">LinkedIn</a>
      </p>
      <p>
        Resume (PDF)
      </p>
    </div>
  </Layout>
)

export default ContactPage
