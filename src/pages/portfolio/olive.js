import React from "react"
import {headerContainer, contentContainer} from "./olive.module.css"


const OlivePage = () => (
  <>
    <div className={headerContainer}>
      <h1>Olive Mental Health!</h1>
      <h2>Your Mental Health Guide</h2>
      <p style={{textAlign: "center"}}>
        Olive believes in being a healthy, supportive, and peaceful environment
        that allows users to complete <b>mental health activities, track health
        information</b>, and <b>read articles</b> to <b>improve</b> their
        mental health.
      </p>
    </div>
    <div className={contentContainer}>
      <h1>The Goal</h1>
      <p>
        To create a motivational, easy to use mental health and wellness application for individuals who are looking for ways to improve their mental health and wellbeing.
      </p>
      <h2>My Role</h2>
      <ul><li>UX Researcher</li> <li>UX Designer</li> <li>UI Designer</li></ul>
      <h2>Tools</h2>
      <ul>
        <li>Balsamiq</li>
        <li>Figma</li>
        <li>Adobe XD</li>
      </ul>
      <h2>Methods</h2>
      <ul>
        <li>Competitive Analysis</li><li>User Interviews</li><li>Personas</li><li>Mental Models</li><li>User Flows</li><li>Sitemaps</li><li>{"Wireframing & Prototyping"}</li><li>User Testing</li><li>Design Language Systems</li>
      </ul>
      <h2>Understanding the Problem</h2>
      <p>Now more than ever, mental health and self-care are rapidly increasing in demand. Not only can different tools and techniques help different individuals to reduce stress but they can lead to a connection to the world that helps increase empathy for others. With more and more things moving online there is a growing importance for online mental health resources that can help a wide range of individuals to help them lead healthier, fuller lives.</p>
      <h2>The Challenge</h2>
      <p>Mental health is a <b>unique journey</b> for everyone. While some people need cognitive behavioural therapy sessions, others need a long walk, or journalling prompts. That’s why it is so important to provide a <b>variety of tailored techniques</b> for users so that they can get the help they need exactly when they need it.</p>
    </div>
  </>
)

export default OlivePage
