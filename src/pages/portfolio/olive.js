import React from "react"
import { Link } from "gatsby"
import Quote from "../../components/quote"
import UserFlow from "../../components/user-flow"
import dashboardMobileImage from "../../images/olive/dashboard-mobile.png"
import iphoneWelcomeImage from "../../images/olive/iphone-welcome.png"
import treeImage from "../../images/olive/tree.svg"
import ellaPersonaImage from "../../images/olive/ella-persona.png"
import ellaMentalModelImage from "../../images/olive/ella-mental-model.png"
import ellaUserJourneyImage from "../../images/olive/ella-user-journey.png"
import userFlowImage1 from "../../images/olive/olive-userflow1.svg"
import userFlowImage2 from "../../images/olive/olive-userflow2.svg"
import userFlowImage3 from "../../images/olive/olive-userflow3.svg"
import sitemapImage from "../../images/olive/olive-sitemap.svg"
import wireframePrototypeImage from "../../images/olive/wireframe-prototype.png"
import usabilityParticipantsImage from "../../images/olive/usability-participants.png"
import rainbowSpreadsheetImage from "../../images/olive/rainbow-spreadsheet.png"
import metricsResultsImage from "../../images/olive/metrics-results.png"
import parkImage from "../../images/olive/park.svg"
import {
  headerContainer,
  contentContainer,
  goalSection,
  bulletList,
  noBulletList
} from "./olive.module.css"


const OlivePage = () => (
  <>
    <div className={headerContainer}>
      <Link
        style={{
          position: "fixed",
          left: 10,
          top: 10,
          transform: "rotate(180deg)",
          color: "black",
          fontSize: "4vw"

        }}
        to="/portfolio"
      >
        {"➜"}
      </Link>
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
      <div className={goalSection}>
        <h1>The Goal</h1>
        <img
          style={{transform: "rotate(10deg)", width: "15vw"}}
          src={dashboardMobileImage}
        />
        <img
          style={{width: "10vw"}}
          src={iphoneWelcomeImage}
        />
        <p>
        To create a motivational, easy to use mental health and wellness application for individuals who are looking for ways to <b>improve their mental health and wellbeing.</b>
        </p>
        <div style={{display: "flex", padding: "2vw 0px 6vw"}}>
          <div style={{flex: "50%"}}>
            <h2 style={{paddingBottom: "1vw"}}>My Role</h2>
            <ul className={noBulletList} style={{paddingBottom: "2vw"}}>
              <li>UX Researcher</li>
              <li>UX Designer</li>
              <li>UI Designer</li>
            </ul>
            <h2 style={{paddingBottom: "1vw"}} >Tools</h2>
            <ul className={noBulletList}>
              <li>Balsamiq</li>
              <li>Figma</li>
              <li>Adobe XD</li>
            </ul>
          </div>
          <div style={{flex: "50%"}}>
            <h2 style={{paddingBottom: "1vw"}}>Methods</h2>
            <ul className={noBulletList}>
              <li>Competitive Analysis</li>
              <li>User Interviews</li>
              <li>Personas</li>
              <li>Mental Models</li>
              <li>User Flows</li>
              <li>Sitemaps</li>
              <li>{"Wireframing & Prototyping"}</li>
              <li>User Testing</li>
              <li>Design Language Systems</li>
            </ul>
          </div>
        </div>

      </div>
      <h1>Understanding the Problem</h1>
      <p>Now more than ever, mental health and self-care are rapidly increasing in demand. Not only can different tools and techniques help different individuals to reduce stress but they can lead to a connection to the world that helps increase empathy for others. With more and more things moving online there is a growing importance for online mental health resources that can help a wide range of individuals to help them lead healthier, fuller lives.</p>
      <div style={{display: "flex", marginTop: "5%"}}>
        <div style={{flex: "50%"}}>
          <img style={{width: "100%", transform: "translateX(-20%)"}} src={treeImage} />
        </div>
        <div style={{flex: "50%"}}>
          <h1>The Challenge</h1>
          <p>{"Mental health is a "} <b>{"unique journey"}</b> {" for everyone. While some people need cognitive behavioural therapy sessions, others need a long walk, or journalling prompts. That's why it is so important to provide a "} <b>{"variety of tailored techniques"}</b>{" for users so that they can get the help they need exactly when they need it."}</p>
        </div>
      </div>
      <h1>The Problem Statement</h1>
      <p>Individuals <b>need ways</b> to engage with helpful mental health resources <b>because</b> they need motivation to complete their mental health activities.</p>
      <h1>Competitive Analysis</h1>
      <p><b>Takeaways</b></p>
      <ul className={bulletList}>
        <li>There is a gap in educational content.</li>
        <li>People need to be motivated to continue to use mental health apps.</li>
        <li>Often mental health apps find one scientifically proven method and base the whole app around it. Since mental health is a very personal journey, having an app that offers multiple tools in one could be helpful.</li>
      </ul>
      <br/>
      <p>
        <a href="https://drive.google.com/file/d/1kEx6ZdTHJUiDNFbfFFB_SOju5rP4A-Im/view?usp=sharing">
          Read the full competitive analysis.
        </a>
      </p>
      <h1>User Interviews</h1>
      <p>Read <a href="https://drive.google.com/file/d/1uG45B9rKF1kVoPZZnqyPsocWscaXg7iK/view?usp=sharing">Interview Script</a> {"// Read full"} <a href="https://drive.google.com/file/d/15oSYpYfQ-UsTzS1kF8cwTzjyFZqkhdSG/view?usp=sharing">User Research Analysis.</a></p>
      <p><b>Top Insights from my User Research:</b></p>
      <ul className={bulletList}>
        <li>{"Personalization is key when it comes to mental health because everyone's mental health needs are unique."}</li>
        <li>Providing easier and quick assistance to mental health help through trusted resources is needed.</li>
        <li>Credible scientific information is preferred.</li>
        <li><b>Motivation is an obstacle when trying to improve mental health</b>, people require notifications, progress trackers, and check-ins for support.</li>
        <li>{"When people start realizing/believing they have a mental health issue, they stop blaming themselves for oversimplifications like 'being lazy' and they can begin to heal."}</li>
        <li>{"Individuals experiencing mental health issues feel guilty, shameful, and 'silly' when trying to explain their situation to others."}</li>
        <li>{"Many users think of meditation as being heavily associated with good mental health but a lot of users don't find meditation actually helps them with their mental health."}</li>
        <li>It is hard to find safe spaces to connect with others experiencing similar issues.</li>
        <li><b>It is important to provide actionable steps to relieve mental health symptoms.</b></li>
        <li>{"Mental health is so encompassing that activities such as finding recipes, raising your income level, and going on walks are all seen as activities to improve one's mental health."}</li>
      </ul>
      <p>Based on these findings, the biggest challenge for users is finding the motivation to improve their mental health and finding unique activities that help them personally.</p>
      <Quote text="I believe motivation to do for mental health activities is challenging." author="Anita (27)" />
      <Quote text="I feel really motivated by cheers and progress tracking." author="Kelsey (29)" />
      <Quote text="Talking about actionable steps that I can take to relieve stress is more helpful than talking about the event that is causing me stress." author="Jason (26)" />
      <Quote text="I enjoy learning about the science behind mental health." author="Kelsey (29)" />
      <h1>User Personas</h1>
      <p>{"In order to step into my users' shoes and see the product from their point of view, I analyzed the results of the user interviews and created personas to see the product from the user's point of view so I could have a greater chance of fulfilling their needs efficiently."}</p>
      <img width="100%" src={ellaPersonaImage}></img>
      <h1>Mental Models</h1>
      <p>I created mental models so that I could identify the ways a persona could accomplish a set of tasks or a larger goal by mapping their state of mind throughout a process.</p>
      <img width="100%" src={ellaMentalModelImage}></img>
      <h1>User Journey Maps</h1>
      <p>{"To visualize what my users' journey through the Olive app could be like, I created user journey maps by defining realistic user scenarios and some key goals my personas have based on research insights."}</p>
      <img width="100%" src={ellaUserJourneyImage}></img>
      <h1>User Flows</h1>
      <p>These flows were created to make sure I was understanding the interactions between my users and the Olive app when they attempt to complete tasks using the core features.</p>
      <UserFlow
        number="1"
        entryPoint="Open Application."
        successCriteria="Read the information about the area of interest."
        imageSrc={userFlowImage1}
      />
      <UserFlow
        number="2"
        entryPoint="Open Application."
        successCriteria="Activity is completed and progress is indicated."
        imageSrc={userFlowImage2}
      />
      <UserFlow
        number="3"
        entryPoint="Open Application."
        successCriteria="Success message from app that David has input his health information."
        imageSrc={userFlowImage3}
      />
      <h1>Sitemap</h1>
      <p>I used Draw.io to create a sitemap in order to provide a view of Olive’s information architecture to better understand the navigation and features of the app.</p>
      <p><a href="https://drive.google.com/file/d/1sSfLls05AhvzMkQIR6d0FqRGdpipWTcN/view?usp=sharing">View full Card Sorting exercise.</a></p>
      <img width="100%" src={sitemapImage}></img>
      <div style={{display: "flex"}}>
        <div style={{flex: "50%"}}>
          <h1>{"Wireframes & Prototypes"}</h1>
          <p>{"After creating the functionality of the onboarding and core features, I translated my low-fidelity wireframes into mid-fidelity wireframes using Figma. The goal of these mid-fidelity prototypes was to convey the function and specifics of the user interface so that I could get feedback from potential users on pain points and goal completion."}</p>
          <p>{"Olive's mobile prototype and desktop prototype that were used in usability testing."}</p>
        </div>
        <div style={{display: "flex", flex: "50%", justifyContent: "center"}}>
          <img style={{width: "80%", transform: "rotate(10deg)"}} src={wireframePrototypeImage}></img>
        </div>
      </div>
      <div style={{display: "flex"}}>
        <div style={{flex: "50%"}}>
          <img style={{width: "70%"}} src={usabilityParticipantsImage} ></img>
        </div>
        <div style={{flex: "50%"}}>
          <h1>Usability Test Plan</h1>
          <p>At this point in the design process, I was ready to validate my designs through testing my prototypes with real users, collecting feedback, and iterating on my designs.</p>
          <p>Read the full <a href="https://drive.google.com/file/d/1QJcLUgVObO3WWq5woI9aG9jz_HtWv6wN/view?usp=sharing">Usability Test Plan (PDF)</a> which includes goals, test objectives, methods, participants, and metrics.</p>
          <h1>Usability Test Script</h1>
          <p><a href="https://drive.google.com/file/d/16csUQCM7ISbVWyqOFbWOJ6y2V-WtWJOD/view?usp=sharing">Read full Usability Test Script (PDF).</a></p>
        </div>
      </div>

      <h1>Affinity Map</h1>
      <p>{"After conducting user interviews, I went through the responses and noted anything regarding participants' thoughts, feelings, behaviours, positive and negative quotes, and errors. Once I was finished organizing my notes according to the participant's responses (each colour of sticky note represents a different user) I created an affinity map with clusters of similar insights."}</p>
      <p>Review the full <a href="https://drive.google.com/file/d/1-cdfTsnoQKG4kkXt4kS5obpjDRT7oaPa/view?usp=sharing">Affinity Map (PDF).</a></p>
      <Quote text="I prefer this app over anything else I've tried." author="Participant 4" />
      <Quote text="Onboarding is way too long and wordy." author="Participant 5" />
      <Quote text="Tracker should have different scales." author="Participant 6" />
      <Quote text="The dashboard is overwhelming the suggested content should be hidden." author="Participant 3" />
      <h1>Rainbow Spreadsheet</h1>
      <img width="100%" src={rainbowSpreadsheetImage}></img>
      <h1>Metric Results</h1>
      <img width="100%" src={metricsResultsImage}></img>
      <div style={{display: "flex", gap: "2vw"}}>
        <div style={{flex: "50%"}}>
          <p><b>Learnability Results</b></p>
          <p>The success rate for this app was very high since almost all of the time participants were able to accomplish the basic tasks and understand the functionality of the app very easily. Only a few were unsure for a few seconds before getting themselves back on track with no prompting.
          </p>
        </div>
        <div style={{flex: "50%"}}>
          <p><b>Efficiency Results</b></p>
          <p>On desktop, onboarding took on average 6:40 minutes, and on mobile onboarding took 7:60 minutes. The time taken as well as the participants’ comments on the onboarding process made the onboarding process something I want to re-work in order to ensure efficient use of the app and enjoyability.
          </p>
        </div>
        <div style={{flex: "50%"}}>
          <p><b>Satisfaction Results</b></p>
          <p>When we look at the satisfaction rating for tracking, the average satisfaction for desktop was a 5.2/7 and for mobile was 5.8/7. These being the lowest scores coupled with comments from participants suggested this feature should be re-designed to be more satisfying for the users.
          </p>
        </div>
      </div>

      <h1>Reporting Findings</h1>
      <p>{"All participants were able to complete all the tasks with little to no assistance. Using the System Usability Scale (SUS) to measure the participant's overall impressions of usability and experience of the Olive app, participants rated Olive on average 87.5% for usability and experience. The main challenges and errors experienced by participants are listed below. These were the top 5 issues and the possible changes that could be made."}</p>

      <h1>Design Iterations</h1>
      <h1>Design Language System</h1>
      <p>{"I created a design language system for Olive to ensure consistency throughout the application. I feel like I could have included even more detail but as it is I was able to create a number of re-usable components and rules that allowed me to make Olive more cohesive while enhancing the app's values of being healthy, supportive, and serene."}</p>
      <p>View full <a href="https://drive.google.com/file/d/1_y8FZVXoe-zcZiEEFKEROh60uIkqXKFe/view?usp=sharing">Design Language System (PDF).</a></p>
      <h1>Peer Review</h1>
      <p>{"I conducted a peer review with my fellow Career Foundry peers to get some outside eyes on my work so that I can make sure I wasn't missing anything."}</p>
      <p>View all the great <a href="https://drive.google.com/file/d/1kxa3_rajfl8HY6kMa8MuuO6ShBF3Pee6/view?usp=sharing">Peer Feedback</a> I received.</p>
      <h1>Final Prototype</h1>
      <p>Having gone through a few more design iterations I came up with my final design prototype.</p>
      <div style={{display: "flex", justifyContent: "center"}}>
        <img style={{width: "30vw"}} src={iphoneWelcomeImage}></img>
      </div>
      <h1>Retrospective</h1>
      <p>{"My original intention was to design a mental health and wellness web application that was motivational and easy to use while providing individuals who what to improve their mental health with a variety of tools/resources that would help them specifically."}</p>
      <p>{"My biggest challenge was having to decide which solutions to use, which solutions could be future features, and which solutions weren't right for this particular application. I wanted to ensure that the main user goals of having an easy-to-use and motivational tool were always the focus but also that the brand values of being healthy, supportive, and serene were always accounted for."}</p>
      <p>{"One possible solution that didn't make the cut was a scheduling feature. During user interviews, some users had stated that:"}</p>
      <p><i>“I believe the best motivation is a mixture of structure and flexibility.” ~ Anita (27)</i></p>
      <p><i>“I feel better when I structure time to experience my emotions so that I can restart fresh the next day.” ~ Jason (26)</i></p>
      <p><i>“I believe alarms and reminders are really helpful motivators.” ~ Anita (27)</i></p>
      <p>{"This led me to believe a scheduling function to schedule time for their mental health could be a helpful solution to motivate the user to do some mental health activities that would improve their mental health. However, most people already have calendars and to-do lists and they don't need yet another place to check what they are supposed to do today. In fact, having this extra schedule could create even more anxiety for them. So I decided I would create structure through notifications and reminders that would be sent at certain times in the day but would also allow for flexibility."}</p>
      <p>{"As a result, I am proud of the app's serene look and feel, as well as the dashboard's supportive and motivational nature. I chose to make the users' mental health goal the most prominent item on the dashboard so that they would feel motivated to keep improving their mental health one day at a time."}</p>
      <p>{"Moving forward, I'd like to approach more projects with an honest look into my assumptions about the target audience. By writing down all my assumptions I found it easier to challenge them during user interviews and testing to ensure that I am designing for the user v.s. creating a design based on my own assumptions. In the case of Olive, I found that some of my assumptions (such as how having the motivation to improve ones mental health can be difficult) were true to the audience while others (such as providing all the information the audience could want on the dashboard screen - this was proven to be too overwhelming) were aspects I was glad to understand better so that I could improve on the user's experience of Olive."}</p>
      <div style={{display: "flex"}}>
        <div style={{flex: "50%"}}>
          <img style={{objectFit: "cover"}} width="100%" height="100%" src={parkImage}></img>
        </div>
        <div style={{flex: "50%"}}>
          <h1>What I learned from this project?</h1>
          <p>If terms for the card sort are ambiguous it would be best to do a hybrid card sort to better understand what terms should be used and what the navigation should be.</p>
          <p>It is super important to be really prepared when doing usability testing.</p>
          <p>Being able to obtain multiple metrics from usability tests can be really helpful in analyzing the usability of the product.</p>
          <p>I found that I really enjoyed creating affinity maps and discovering what similar (and opposite) things users felt about the product.</p>
          <p>I found that iteration can come from lots of different places, not just usability testing. I also had some big iterations after peer feedback and creating my design system.</p>
          <p>There are lots of different types of solutions that can be implemented but I had to keep reminding myself to come back to what is the most effective for the user.</p>
        </div>
      </div>

    </div>
  </>
)

export default OlivePage
