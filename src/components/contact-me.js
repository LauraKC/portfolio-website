import React from "react"
import LinkedInButtonPhoto from "../images/linkedin_button_w.png"
import EmailButtonPhoto from "../images/email_button_w.png"
import ResumeButtonPhoto from "../images/resume_button_w.png"
import { myEmail, myLinkedin, myResume} from "../constants"

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
}
const imageContainerStyle = {
  display: "flex",
  justifyContent: "space-around",
  width: "20%",
}

const ContactMe = () => (
  <div style={containerStyle}>
    <h2 style={{paddingTop: "10%"}}>{"Let's Connect"}</h2>
    <p>I'd love to hear from you!</p>
    <div style={imageContainerStyle}>
      <a href={myLinkedin} target="_blank">
        <img style={{width: "70%"}} src={LinkedInButtonPhoto} />
      </a>
      <a href={"mailto:" + myEmail} target="_blank">
        <img style={{width: "70%"}} src={EmailButtonPhoto} />
      </a>
    </div>
  </div>
)

export default ContactMe
