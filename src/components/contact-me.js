import React from "react"
import LinkedInButtonPhoto from "../images/linkedin_button_w.png"
import EmailButtonPhoto from "../images/email_button_w.png"
import ResumeButtonPhoto from "../images/resume_button_w.png"
import { myEmail, myLinkedin, myResume} from "../constants"

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
}
const imageContainerStyle = {
  display: "flex",
  justifyContent: "space-around",
  width: "50%",
}

const ContactMe = () => (
  <div style={containerStyle}>
    <h2>{"Let's Connect"}</h2>
    <p>Get in touch for opportunities or just say hi!</p>
    <div style={imageContainerStyle}>
      <a href={myLinkedin}>
        <img src={LinkedInButtonPhoto} />
      </a>
      <a href={"mailto:" + myEmail}>
        <img src={EmailButtonPhoto} />
      </a>
      <a href={myResume}>
        <img src={ResumeButtonPhoto} />
      </a>
    </div>
  </div>
)

export default ContactMe
