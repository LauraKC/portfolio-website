import React from "react"
import { Link } from "gatsby"
import Quote from "../../components/quote"
import UserFlow from "../../components/user-flow"
import convo_screen from "../../images/milla/milla_convo_screen.png"
import onboarding_screen from "../../images/milla/milla_onboarding_screen.png"
import challengeimage from "../../images/milla/undraw_studying.png"
import protopersona from "../../images/milla/milla_proto_persona.png"
import userflow1 from "../../images/milla/milla_user_flow1.png"
import userflow2 from "../../images/milla/milla_user_flow2.png"
import wireframe from "../../images/milla/milla_wireframes.png"
import iteration1 from "../../images/milla/milla_iteration1.png"
import iteration2 from "../../images/milla/milla_iteration2.png"
import testreport from "../../images/milla/milla_usability_test_report.png"
import designiteration1b from "../../images/milla/milla_design_iteration_1b.png"
import designiteration1a from "../../images/milla/milla_design_iteration_1a.png"
import designiteration2b from "../../images/milla/milla_design_iteration_2b.png"
import designiteration2a from "../../images/milla/milla_design_iteration_2a.png"
import designiteration3b from "../../images/milla/milla_design_iteration_3b.png"
import designiteration3a from "../../images/milla/milla_design_iteration_3a.png"
import designiteration4b from "../../images/milla/milla_design_iteration_4b.png"
import designiteration4a from "../../images/milla/milla_design_iteration_4a.png"
import retrospectiveimage from "../../images/milla/undraw_Conversation_re_c26v.png"
import prototype from "../../images/milla/milla_prototype.png"
import {
  headerContainer,
  pageContainer,
  contentContainer,
  goalSection,
  bulletList,
  noBulletList,
  quote1,
  quote2,
  flexColumns,
} from "./portfolio-page.module.css"
import CurvedText from "../../components/curved-text"

const MillaPage = () => (
  <div className={pageContainer}>
    <div
      className={headerContainer}
      style={{
        backgroundColor: "var(--milla-blue)",
        color: "white",
      }}
    >
      <Link
        style={{
          position: "fixed",
          left: 10,
          top: 10,
          transform: "rotate(180deg)",
          color: "black",
          fontSize: "var(--back-button-size)"
        }}
        to="/portfolio"
      >
        {"➜"}
      </Link>
      <CurvedText text="MILLA"/>
      <h2><b>M</b>y <b>I</b>mmersive <b>L</b>anguage <b>L</b>earning <b>A</b>ssistant app</h2>
      <p style={{textAlign: "center"}}>
        MILLA is designed to empower travellers and expats to learn new languages.
      </p>
    </div>
    <div className={contentContainer}>
      <div className={goalSection}>
        <h1>The Goal</h1>
        <img className="image-right" src={convo_screen} />
        <img className="image-left" src={onboarding_screen} />
        <p>
        To create an empowering mobile app for travellers and expats who are looking to <b>learn a new language.</b>
        </p>
        <div style={{display: "flex", padding: "2vw 0px 6vw"}}>
          <div style={{flex: "50%"}}>
            <h2 style={{paddingBottom: "1vw"}}>My Role</h2>
            <ul className={noBulletList} style={{paddingBottom: "2vw"}}>
              <li>UX Researcher</li>
              <li>UX Designer</li>
            </ul>
            <h2 style={{paddingBottom: "1vw"}}>Tools</h2>
            <ul className={noBulletList} style={{paddingBottom: "2vw"}}>
              <li>{"Pen & Paper"}</li>
              <li>Marvel</li>
            </ul>
            <h2 style={{paddingBottom: "1vw"}}>Duration</h2>
            <ul className={noBulletList} style={{paddingBottom: "2vw"}}>
              <li>{"1 month"}</li>
            </ul>
          </div>
          <div style={{flex: "50%"}}>
            <h2 style={{paddingBottom: "1vw"}}>What I did</h2>
            <ul className={noBulletList}>
              <li>Competitive Analysis</li>
              <li>User Interviews</li>
              <li>Proto - Persona</li>
              <li>User Flows</li>
              <li>{"Wireframing & Prototyping"}</li>
              <li>User Testing</li>
            </ul>
          </div>
        </div>
      </div>
      <div style={{display: "flex", marginTop: "5%"}}>
        <div style={{flex: "50%"}}>
          <img style={{width: "100%", transform: "translateX(-20%)"}} src={challengeimage} />
        </div>
        <div style={{flex: "50%"}}>
          <h1>The Challenge</h1>
          <p>
             To create a mobile app based on the brief provided by CareerFoundry.
          </p>
          <h1>The Problem Statement</h1>
          <p>
            {"The problem provided by CareerFoundry was 'How might we design a mobile app that empowers people to learn new vocabulary?'"}
          </p>
        </div>
      </div>
      <h1>Understanding the Problem</h1>
      <p>
      Users need/want to be immersed in the language before they get to their travel destinations, so they can start preparing to have conversations.
      </p>
      <p>There are many ways to learn a new language. For those that are travellers or expats who are looking to learn a new language often the goal is to be able to have a conversation not to be fluent in the language. Most language learning experts agree that the top 7 things you need to do are:
      </p>
      <ol>
        <li>Learn the right words</li>
        <li>Hear the language continuously spoken</li>
        <li>Speak to native speakers</li>
        <li>Use spacial repetition and mnemonics</li>
        <li>Embrace mistakes</li>
        <li>Create SMART goals/motivation</li>
        <li>Learn accents/intonation</li>
      </ol>
      <h1>Competitive Analysis</h1>
      <p>It was important to conduct a competitive analysis to understand what products are already on the market, what they are doing right, and what pain points users are experiencing still. I made the decision to choose competitors that focus on conversational language learning as that was the main user goal for MILLA.</p>
      <p><b>Takeaways</b></p>
      <ul className={bulletList}>
        <li>A lot of apps focus on one particular technique i.e. Memrise focuses on flashcards.</li>
        <li>Not a lot of apps allow for the user to be immersed in the language.</li>
      </ul>
      <p>
        Read the full <a href="https://drive.google.com/file/d/1iKaMlSIUKE6QL5bVjf-TkTCk6UC-VIkI/view?usp=sharing">Competitive Analysis</a>(PDF).</p>
      <h1>User Interviews</h1>
      <p>Read full <a href="https://drive.google.com/file/d/14yg-2-FO-7VL4wyd1VFpZ2A_OyY64TD8/view?usp=sharing">User Interview Process and Analysis</a>(PDF).</p>
      <p><b>Top Insights from my User Interviews:</b></p>
      <ul className={bulletList}>
        <li>Users feel they learn languages faster when they are immersed</li>
        <li>Motivation to learn a language is necessary</li>
      </ul>
      <p>When completing my User Interviews I found it challenging to take notes and be an engaged listener. I quickly realized that to solve this it was easier to record my participants so I could listen and take notes after the interview.
      </p>
      <Quote
        text="Once you are immersed in the language, it is a lot easier to learn."
        author="Participant 1 (27)"
        className={quote1}
      />
      <Quote
        text="It is easier to learn a language if there is some direct outcome I'm working towards."
        author="Participant 4 (27)"
        className={quote2}
      />
      <h1>Proto-Persona</h1>
      <p>
        {"To understand my users' points of view better, I analyzed the results of the user interviews and created a proto-persona to see the product from their eyes. This allowed me to create a product that fulfilled the users needs."}
      </p>
      <img width="100%" src={protopersona} />
      <h1>Persona Challenges</h1>
      <p>These are quotes from user interviews that informed the challenges that Jesse faces when finding ways to be immersed in the language.</p>
      <ol>
        <li>{"The first challenge is understanding structures of sentences and explanations of word use. Because there isn't always clear information on these items during his learning process often he has to navigate away from his learning to look up things."}
        </li>
        <Quote
          text="I seek out explanations on why certain words are used. Not just direct translations but explanations around how words are used."
          author="Participant 1 (27)"
        />
        <li>Secondly, feeling comfortable speaking the language.</li>
        <Quote
          text="When speaking to a native speaker I feel nervous and mostly that…it's probably very obvious that I don't speak the language."
          author="Participant 4 (27)"
        />
        <li>Difficulty finding examples where he can listen to local speech.</li>
        <Quote
          text="An app that has voices of real people saying phrases would be helpful so that you can get used to how words actually sound in a local accent rather than an AI's pronunciation."
          author="Participant 2 (33)"
        />
        <li>Jesse is busy with arranging things for his move. He needs an app that can help him learn Dutch easily and in a flexible way, at times that are convenient to him.</li>
        <Quote
          text=" I study in short sessions that I can squeeze in around the other things I have to do in a day."
          author="Participant 3 (25)"
        />
      </ol>

      <h1>The Problem Statement</h1>
      <p>Jesse <b>needs a way</b> to be immersed in the language <b>because</b> constant exposure to the language is the most effective way to learn.</p>
      <p><b>We will know this to be true when</b> Jesse is able to respond immediately to conversational questions asked in the target language.</p>
      <h1>Hypothesis Statement</h1>
      <p><b>{"We believe that by"}</b>{" having an audio focused language app that is personalized for the user, "}<b>{"for Jesse"}</b>{", we will achieve having improvement of Jesse's comprehension of the target language and progression through the app. Thus achieving 20% more engagement and use of the app."}</p>
      <p>And of course <b>Jesse will accomplish</b> his goal of being able to have a conversation with a local when he is in the Netherlands.</p>
      <h1>The Problem Statement</h1>
      <p>Jesse <b>needs a way</b> to be immersed in the language <b>because</b> constant exposure to the language is the most effective way to learn.</p>
      <p><b>We will know this to be true when</b> Jesse is able to respond immediately to conversational questions asked in the target language.</p>
      <h1>User Stories</h1>
      <p><b>As</b> Jesse (a soon to be expat), <b>I want</b> to engage with lots of examples of complex language <b>so that</b> I can understand the use of complex language. (i.e. homophones)</p>
      <p><b>As</b> Jesse (a soon to be expat), <b>I want</b> the ability to converse with native speakers <b>so that</b> I can become comfortable speaking the target language.</p>
      <p><b>As</b> Jesse (a soon to be expat), <b>I want</b> to have a personalized learning experience <b>so that</b> I can learn in an engaging way.</p>
      <p><b>As</b> Jesse (a soon to be expat), <b>I want</b> streamlined lessons <b>so that</b> I am able to learn in a flexible way, at times that are convenient to me.</p>
      <p><b>As</b> Jesse (a soon to be expat), <b>I want</b> to be immersed in the language <b>so that</b> I am able to learn more quickly and efficiently.</p>
      <h1>Job Stories</h1>
      <p><b>When</b>{" I come across an example of complex language being used in a way I don't understand, "}<b>I want</b> to see multiple examples and have a clear explanation <b>so that</b> I can fully understand when the words would be used in different contexts.</p>
      <p><b>When</b>{" I am listening to my target language, "}<b>I want</b>{" to hear native speakers' voices, "}<b>so that</b> I can become more comfortable with the spoken language.</p>
      <p><b>When</b> I am listening to a conversation in my target language, <b>I want</b> to be asked questions about the conversation, <b>so that</b> I stay engaged with the material.</p>
      <p><b>When</b> I am waiting in line for lunch, <b>I want</b> an effective streamlined lesson, <b>so that</b> I can learn at times that are convenient to me.</p>
      <p><b>When</b> I use the app, <b>I want</b> it to be personalized for my interests, <b>so that</b> I can stay engaged with the material.</p>
      <h1>User Flows</h1>
      <p>MILLA is focused on immersing the user through audio lessons, video clips of locals and the users ability to explore things around them. Personalization is also a key feature of the app as this will help the user engage with the content.</p>
      <p>These flows were created with draw.io to make sure I understood the interaction between the users and MILLA when they attempt to complete core tasks.</p>
      <UserFlow
        number="1"
        entryPoint="Open Application."
        successCriteria="User completes lesson and understands the complex grammar when it comes up again."
        imageSrc={userflow1}
      />
      <UserFlow
        number="2"
        entryPoint="Menu."
        successCriteria="Item captured (image, or phrase) is added to the library and to lessons for user to review in upcoming lessons."
        imageSrc={userflow2}
      />
      <h1>Wireframes</h1>
      <p>Wireframing is an important step because it allowed me to visualize how the features will look. The goal here was to create quick sketches to get the point across without spending too much time on the UI elements.</p>
      <p>The biggest challenge I had when creating these sketches was making sure the interaction was clear. I made sure to use arrows and coloured dots to indicate click marks.</p>
      <img width="100%" src={wireframe} />
      <p>The early prototypes of MILLA included a splash screen, welcome page and onboarding screens that highlighted some of the important features of the app. The user is then directed to a screen where they could choose to sign up if they had not used the app before or login if they already had an account. For first time users once they signed in they were prompted with 4 personalization questions, which adds in the engagement and relevancy of the content that is presented to the user.</p>
      <p>The user is then brought to the list of lessons page, which is also the home screen. From here users can navigate to their profile, the explore page or the notes page. The profile page allows them to change their preferences and personalizations. The explore feature allows them to take picture of objects around them, see the translation and listen to the pronunciation of those objects. The notes feature allows the user to create and save free form notes. As for the lessons, they are based mostly around audio clips. Since users wanted more detailed explanations of grammar, the app allows for a grammar drop down when users are going through the material.</p>
      <h1>Prototype</h1>
      <p>From my low-fidelity wireframes, I created a mid-fidelity prototype in Marvel, so that I could have my usability testers interact with a working version of MILLA.</p>
      <h1>Early Prototypes Iterations</h1>
      <p>{"At first the lessons would finish and go straight back to the lessons page. The abruptness of the change left users confused and feeling like the lesson was incomplete. Having added a success screen after the lesson, not only allowed for a smoother transition for the user but also allowed for some gamification aspects to be shown and a place to motivate the user, and help them embrace mistakes (they're going to happen!) with exciting images and congratulatory wording."}</p>
      <p>Another big issue was updating the navigation. At first I just used text as I was showing a low-fidelity prototype to reduce feedback on design however, the text ended up being a problem as it was too small to read. I updated the navigation to have icons and all users were instantly able to understand those better.</p>
      <img className="image-left" width="50%" src={iteration1} />
      <img className="image-right" width="50%" src={iteration2} />
      <h1>{"Usability Test Plan & Script"}</h1>
      <p>To test the MILLA prototype I created a usability test plan that asked 4 users that were either currently expats or frequent travellers to complete the following 4 direct tasks.</p>
      <p>Read the full <a href="https://drive.google.com/file/d/1UibnHX7BjybTPz-591oKU-_B0CfJTGu9/view?usp=sharing">Usability Test Plan</a>(PDF) which includes scope, schedule, metrics, script, and participant notes.</p>
      <h1>Usability Test Report</h1>
      <p>{"I created a usability test report using the Jakob Nielsen's rating scale:"}</p>
      <p>{"0 = I don't agree that this is a usability problem at all"}</p>
      <p>1 = Cosmetic problem only: need not be fixed unless extra time is available on project.</p>
      <p>2 = Minor usability problem: fixing this should be given low priority.</p>
      <p>3 = Major usability problem: important to fix and should be given high priority.</p>
      <p>4 = Usability catastrophe: imperative to fix before product can be released.</p>
      <img width="100%" src={testreport} />
      <h1>Design Iterations</h1>
      <p>Using my usability testing report I made some iterations to my designs by taking the most severe issues and finding solutions to the problems.</p>
      <p><b>Observation #1:</b></p>
      <div className={flexColumns}>
        <div>
          <h3>Before</h3>
          <img width="100%" src={designiteration1b} />
        </div>
        <div>
          <h3>After</h3>
          <img width="100%" src={designiteration1a} />
        </div>
      </div>
      <p>{"Most users thought that onboarding looked interactive but it is actually images of what the features will look like. I also received feedback that the personalization explanation wasn't clear."}</p>
      <Quote
        text="I was a little confused by the camera and video because I was wondering if it would be a demonstration not just an image."
        author="Rachel (32)"
      />
      <p><b>Improvements:</b></p>
      <p>I greyed out the video so it seemed less interactive and more representative of the types of content they can expect in the app, as well I updated the explanation of personalization.</p>
      <p><b>Value:</b></p>
      <p style={{paddingBottom: "5vw"}}>Users were less confused and able to easily understand what the application will include.</p>
      <p><b>Observation #2:</b></p>
      <div className={flexColumns}>
        <div>
          <h3>Before</h3>
          <img width="100%" src={designiteration2b} />
        </div>
        <div>
          <h3>After</h3>
          <img width="100%" src={designiteration2a} />
        </div>
      </div>
      <p>{"Most users were confused by the navigation (camera, circle button, audio) on the explore screen. Users were also concerned that the item wasn't being added to their lesson and would use different methods to check."}</p>
      <Quote
        text="I thought the button in the middle was to take the picture but then I thought that's what the camera would be so maybe the camera is a library?"
        author="Darwin (27)"
      />
      <p><b>Improvements:</b></p>
      <p>{"I re-designed the buttons to what is heavily recognized and understood in the iPhone camera app, which is the swipe to switch modes. I also, changed the users involvement in adding the item to the lesson by automatically adding the item and providing a popup letting them know that the item has been added. That way they don't have to worry about their involvement in making sure the item has been added."}</p>
      <p><b>Value:</b></p>
      <p style={{paddingBottom: "5vw"}}>Users are more easily able to use the explore function. The buttons are more clear and the app will add the item to their lessons easily.</p>

      <p><b>Observation #3:</b></p>
      <div className={flexColumns}>
        <div>
          <h3>Before</h3>
          <img width="100%" src={designiteration3b} />
        </div>
        <div>
          <h3>After</h3>
          <img width="100%" src={designiteration3a} />
        </div>
      </div>
      <p>Some users were unsure how to close the grammar box once it was open.</p>
      <Quote
        text="I am confused how to close the box, I'll just keep clicking around until it goes away."
        author="Andrew (25)"
      />
      <p><b>Improvements:</b></p>
      <p>{"I re-designed this by greying out the background so users would know that they can click anywhere out of the grammar box to close it. I decided against an 'X' because I didn't want the user to be limited to clicking only one spot on the screen to close the box."}</p>
      <p><b>Value:</b></p>
      <p style={{paddingBottom: "5vw"}}>The interaction is easier for users to understand but also the focus is now fully on the popup box which makes this information easier for the users to see.</p>
      <p><b>Observation #4:</b></p>
      <div className={flexColumns}>
        <div>
          <h3>Before</h3>
          <img width="100%" src={designiteration4b} />
        </div>
        <div>
          <h3>After</h3>
          <img width="100%" src={designiteration4a} />
        </div>
      </div>
      <p>All users were confused by the terms that were used in this feature. One user was also unsure if they would ever user the feature as it was presented.</p>
      <Quote
        text="I don't think I would use the notes function. If I'm exploring the app before doing a lesson, I wouldn't have anything to add yet and I would hesitate to ever use this feature."
        author="Rachel (32)"
      />
      <p><b>Improvements:</b></p>
      <p>{"Based on usability testing this iteration included changing most of the terms! 'Canvas' became 'Make Connections' to clarify to the users what would happen in the space. To make it extra clear how to use this space I added description text to explain how to use this feature. To make the notes feature easier to use I included it in the lessons as this is the point when most users would want to make a note about something they have just learned. That way they don't have to try and remember it after their lesson or exit out of the lesson just to make a note. Of course they can always review their notes by going into the notes page."}</p>
      <p><b>Value:</b></p>
      <p style={{paddingBottom: "5vw"}}>This re-design makes the feature easier for the user to access as well as making this feature more easily understood by the user.</p>
      <h1>Final Prototype</h1>
      <p>Having gone through a few more design iterations I came up with my final design prototype.</p>
      <div style={{display: "flex", justifyContent: "center"}}>
        <a href={"https://marvelapp.com/prototype/14e28chj/screen/78699185"}><img style={{width: "30vw"}} src={prototype}></img></a>
      </div>
      <h1>Summary</h1>
      <p>{"MILLA solves the problem of 'how might we design a mobile app that empowers people to learn new vocabulary' by providing travellers and expats with a way to be immersed in a new language and gain exposure to the language. Through exploring their surroundings, listening to various audio clips and completing many different types of language lessons."}</p>
      <p>The next iterations I would like to take are to continue improving on the notes feature, include a MILLA assistant feature (a chat bot that users could interact with throughout the app to ask questions and enhance their understanding of the language) and of course I would like to create a design system and high-fidelity prototype to test with users.</p>
      <p>My hope is that when users are using MILLA that they feel empowered to keep learning and practicing new languages so that they can feel more comfortable speaking to native speakers.</p>
      <h1>Retrospective:</h1>
      <p>My original intention was to design a mobile app for travellers and expats that empower them to learn a new language.</p>
      <p>I am most proud of the explore feature as I feel that the usability iterations made were the most helpful. As well, I think this particular feature can be really helpful for putting sentences together on your own. </p>
      <p>My biggest challenge with this project was trying to create something that was different from the products already on the market. Although, MILLA has a similar structure to other language learning apps I think I was able to accomplish a unique aspect by focusing on immersing the user as much as possible into the language they are learning.</p>
      <p>I really enjoyed analyzing user interviews. I found it really interesting that although they all had different language learning stories and goals they all felt similarily about their language learning processes.</p>
      <p>{"I learned that UX copy is super important and can be the difference between a clear, easy to understand feature and a confusing feature that won't be utilized by the user."}</p>
      <img width="100%" className="image-left" src={retrospectiveimage} />
    </div>
  </div>
)

export default MillaPage
