import React from "react"
import Layout from "../components/layout"
import { contactDetails } from "./contact.module.css"

const ContactPage = () => (
  <Layout>
    <h1><span className="purple-underline">C</span>ontact me</h1>
    <div className={contactDetails}>
      <h2>Want me on your team?</h2>
      <p>I'm currently available for hire in North America. Do I sound like a good fit for your team? Do you want to find out more about me? Or schedule a meeting? You can find me on <a href="https://www.linkedin.com/in/lauracutler/">LinkedIn</a> or <a href="mailto:laura.cutler.ux@gmail">email me</a> directly.</p>
    </div>
  </Layout>
)

export default ContactPage
