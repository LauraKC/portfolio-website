import React from "react"
import Layout from "../components/layout"
import ProfilePhoto from "../images/profile.jpg"
import AerialPhoto from "../images/aerial.png"
import EmailButtonPhoto from "../images/email_button.png"
import LinkedInButtonPhoto from "../images/linkedin_button.png"

const message1 = `
I'm a Canadian UX designer, who recently made the change from Marketing into User Experience.
`


const AboutPage = () => (
  <Layout>
    <h1 style={{paddingBottom: "10px"}}>
      About<br/>
      <Ws/><Ws/><Ws/><span className="purple-underline">M</span>e
    </h1>
    <div style={{padding: "0 5vw 0 5vw"}}>
      <div style={{
        marginBottom: "50px",
      }}>
        <div style={{display: "inline-block"}}>
          <img
            style={{
              width:"30%",
              float: "left",
              marginRight: "5%",
              borderRadius: "5%"
            }}
            src={ProfilePhoto}
          />
          <p>{message1}</p>
          <p>{"I'm currently available for full-time work and networking in the Americas."}</p>
        </div>
        <p>
          {"I have experience in coordinating the configuration of a multi-channel marketing platform, where I specialized in optimizing the various types of users' experiences of the platform. I've always focused on delivering good client experiences, and this has led me to pursue a career in user experience design. Optimizing user workflows to ensure the user has the best possible experience has been a big part of my jobs in the past. Now, I'm looking forward to applying the same principles to designing great user experiences with products that have a positive impact on people's lives."}
        </p>
        <p>{"I'm driven to help people lead healthier lives by creating simple, intuitive user experiences from inspiration to production. With a passion for mental health and well-being, and a strong interest in immersive designs and AR/VR/XR."}</p>
        <div style={{display: "inline-block"}}>
          <img
            style={{
              float: "left",
              width:"30%",
              marginRight: "5%",
              borderRadius: "5%"
            }}
            src={AerialPhoto}
          />
          <p><b>{"In my spare time:"}</b></p>
          <p>{"If you can't find me at my computer, I'm either in flipping through the air at my aerial silks class, enjoying a great meal, or hanging out with friends."}</p>
        </div>
      </div>
      <div>
        <h2>{"Let's Connect"}</h2>
        <p>Get in touch for opportunities or just say hi!</p>
        <linkedin_button type="button">
          <a href="https://www.linkedin.com/in/lauracutler/"><img src={LinkedInButtonPhoto} /></a>
        </linkedin_button>
        <email_button type="button">
          <a href="mailto:laura.cutler.ux@gmail"><img src={EmailButtonPhoto} /></a>
        </email_button>
      </div>
    </div>
  </Layout>
)



const Ws = () => <span style={{"white-space": "pre-wrap"}}>{" "}</span>


export default AboutPage
