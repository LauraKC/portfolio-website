import React from "react"
import { Link } from "gatsby"
import Quote from "../../components/quote"
import UserFlow from "../../components/user-flow"
import alexa from  "../../images/sage/alexa_cutout.png"
import restrictions from "../../images/sage/dietary-restrictions.svg"
import sageprotopersona from "../../images/sage/sage-proto-persona.png"
import sagesystempersona from "../../images/sage/system-profile.png"
import taylorprofile from "../../images/sage/taylor-profile.png"
import sageprofile from "../../images/sage/sage-profile.png"
import sagesitemap from "../../images/sage/sage_sitemap.png"
import sageuserflow1 from "../../images/sage/sage_UserFlow1.png"
import sageuserflow2 from "../../images/sage/sage_UserFlow2.png"
import sageprototype from "../../images/sage/voiceflow-prototype.png"
import sageparticipants from "../../images/sage/sage-participants.png"
import sageerrors from "../../images/sage/sage-errors.png"
import sageobservations from "../../images/sage/sage-observations.png"
import sageutterances from "../../images/sage/sage-utterances.png"
import sagerainbow from "../../images/sage/sage-rainbow-spreadsheet.png"
import sagemetrics from "../../images/sage/sage-metrics.png"
import cooking from "../../images/sage/cooking.svg"
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
  dialoguecontainer,
  dialogueimage,
  dialoguetext,
} from "./portfolio-page.module.css"
import CurvedText from "../../components/curved-text"

const SagePage = () => (
  <div className={pageContainer}>
    <div
      className={headerContainer}
      style={{
        backgroundColor: "#9F9296",
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
      <CurvedText text="Sage Recipes"/>
      <h2>Your nutritional and cooking assistant.</h2>
      <p style={{textAlign: "center"}}>
        Sage Recipes is an Alexa skill designed for people with <b>dietary restrictions</b> who want help <b>finding new recipes</b> for every meal type. Sage walks you through the <b>cooking process</b> step by step, <b>provides substitutions</b>, and has the ability to <b>help you meal prep</b> and <b>create a grocery list</b>.
      </p>
    </div>
    <div className={contentContainer}>
      <div className={goalSection}>
        <h1>The Goal</h1>
        <img className="image-right" src={alexa} />
        <p>
            To create an easy to use recipe and cooking voice application for individuals who are looking for new recipes to <b>improve their dietary comfort</b>.
        </p>
        <p>
            The goal of this project is to illustrate the voice design process from start to finish within the context of building an Alexa skill.
        </p>
        <div style={{display: "flex", padding: "2vw 0px 6vw"}}>
          <div style={{flex: "50%"}}>
            <h2 style={{paddingBottom: "1vw"}}>My Role</h2>
            <ul className={noBulletList} style={{paddingBottom: "2vw"}}>
                <li>VUI Designer</li>
                <li>UX Researcher</li>
                <li>UX Designer</li>
            </ul>
            <h2 style={{paddingBottom: "1vw"}}>Tools</h2>
            <ul className={noBulletList} style={{paddingBottom: "2vw"}}>
              <li>drawio</li>
              <li>voiceflow</li>
              <li>Alexa Dev Portal</li>
            </ul>
            <h2 style={{paddingBottom: "1vw"}}>Duration</h2>
            <ul className={noBulletList} style={{paddingBottom: "2vw"}}>
              <li>{"2 month"}</li>
            </ul>
          </div>
          <div style={{flex: "50%"}}>
            <h2 style={{paddingBottom: "1vw"}}>What I did</h2>
            <ul className={noBulletList}>
              <li>Proto - Persona</li>
              <li>System Persona</li>
              <li>User Stories</li>
              <li>User Flows</li>
              <li>Scripts</li>
              <li>Prototyping</li>
              <li>Usability Testing</li>
            </ul>
          </div>
        </div>
      </div>
      <h1>Understanding the Problem</h1>
      <p>Food restrictions are often a lifelong reality for many individuals and restricting or cutting out certain foods can be extremely difficult for those whose bodies can't tolerate them. There are many people that have to navigate a world of dietary minefields to combat cravings for things that could wreak havoc in their bodies. Having a trusted application that can provide recipes that have no culprit ingredients, can be very helpful to the individual and those that eat with them.</p>
      <div style={{display: "flex", marginTop: "5%"}}>
        <div style={{flex: "50%"}}>
          <img style={{width: "100%", transform: "translateX(-20%)"}} src={restrictions} />
        </div>
        <div style={{flex: "50%"}}>
          <h1>The Challenge</h1>
          <p>
          There are many different dietary restrictions, some individuals even have multiple. It's important to provide a <b>variety of dietary restricted recipes</b> for users so that they can get helpful and satisfying recipes.
          </p>
        </div>
      </div>
      <h1>The Problem Statement</h1>
          <p>
            Individuals with dietary restrictions <b>need ways</b> to find and cook a variety of recipes <b>because</b> it can be hard to find recipes that fit with their dietary restrictions.
          </p>
      <h1>Proto-Persona</h1>
      <p>
      I created a proto-persona to align my assumptions about users. Since, dietary restrictions affect the individual experiencing these restrictions as well as their eating companions, I created a proto-persona that embodies this dynamic and the issues they both may have.
      </p>
        <div style={{flex: "50%"}}>
          <img style={{width: "100%"}} src={sageprotopersona} />
        </div>
        <h1>System Persona</h1>
        <p>
            To ensure a consistant and trustworthy experience, I created a system persona. Sage is firstly very knowledgable and professional about dietary friendly recipes but she also needed to be friendly and feel more like a coach in your corner than an instructional robotic assistant.
        </p>
        <div style={{flex: "50%"}}>
          <img style={{width: "100%"}} src={sagesystempersona} />
        </div>
        <div>
        <h1>User Stories</h1>
        <p>
            I wrote several users stories for the below high-level functional requirements (based on the brief provided by Career Foundry) as well as a few others that I thought my proto-persons would want.
        </p>
            <ol>
              <li>Providing recipes for breakfast, lunch, dinner and snacks.</li>
              <li>Allow the user to choose their preferred meal.</li>
              <li>Provide an adequate number of meal choices for the user to get value from the app.</li>
              <li>Use the recipe while cooking.</li>
            </ol>
            <p>
                Review all <a href="https://drive.google.com/file/d/1oUaAXiklwgk8KckYyWMZRc5GYXykthFW/view?usp=sharing" target="_blank">User Stories</a> (PDF).
            </p>
        </div>
      <Quote
        text="As Taylor, I want meal suggestions that work with my dietary restrictions, so that I can make quick meals that make me feel good."
        author="User Story 1"
        className={quote1}
      />
      <Quote
        text="As Taylor, I want to be able to make substitutions during the recipe, so that I can have a variety of recipes that don't hurt my body or that fit the ingredients I have at home."
        author="User Story 2"
        className={quote2}
      />
      <h1>Sample Dialogues</h1>
        <p>
          I identified the user stories that I thought were the most compelling, gave the best idea of what the app will do, had the richest back and forths, covered the most common errors I thought my users might encounter, and highlighted the key functionalities of the skill, and wrote sample dialogues for each.
        </p>
        <p>
            Review all <a href="https://drive.google.com/file/d/1ZVikmcDkLB9_CW99ef9TzOd1osDxcixM/view?usp=sharing" target="_blank">Sample Dialogues</a> (PDF).
        </p>
        <p>
            <b>User Story #1</b>
        </p>
        <p>
            As Taylor, <b>I want</b> meal suggestions that work with my dietary restrictions, <b>so that</b> I can make quick meals that make me feel good.
        </p>
        <div className={dialoguecontainer}>
            <div className={dialogueimage}>
                <img src={taylorprofile} />
            </div>
            <div className={dialoguetext}>
                <p><b>Taylor:</b> Alexa, open Sage Recipes.</p>
            </div>
        </div>
        <div className={dialoguecontainer}>
            <div className={dialogueimage}>
                <img src={sageprofile} />
            </div>
            <div className={dialoguetext}>
                <p><b>System:</b> {"Hi, welcome to Sage Recipes. I can help you whip up a delicious meal based on your dietary restrictions. Just say what lactose-free meal should I have for lunch? Or find me gluten-free dinner recipes? Now, what can I help you with?"}</p>
            </div>
        </div>
        <div className={dialoguecontainer}>
            <div className={dialogueimage}>
                <img src={taylorprofile} />
            </div>
            <div className={dialoguetext}>
                <p>What lactose-free meal should I have for lunch?</p>
                <p><i>(Alt 1): Suggest a lactose-free lunch recipe.</i></p>
            </div>
        </div>
        <div className={dialoguecontainer}>
            <div className={dialogueimage}>
                <img src={sageprofile} />
            </div>
            <div className={dialoguetext}>
                <p>{"I found a recipe for turkey sandwich or vegan pasta salad. Would you like to pick one of these?"}</p>
            </div>
        </div>
        <div className={dialoguecontainer}>
            <div className={dialogueimage}>
                <img src={taylorprofile} />
            </div>
            <div className={dialoguetext}>
                <p>Yes, the turkey sandwich.</p>
            </div>
        </div>
        <div className={dialoguecontainer}>
            <div className={dialogueimage}>
                <img src={sageprofile} />
            </div>
            <div className={dialoguetext}>
                <p>{"Okay, this will take around 15 minutes. Do you want to continue?"}</p>
            </div>
        </div>
        <p>
            <b>User Story #2</b>
        </p>
        <p>
            As Taylor, <b>I want</b> to be able to make substitutions during the recipe, <b>so that</b> I can have a variety of recipes that don't hurt my body or that fit the ingredients I have at home.
        </p>
        <div className={dialoguecontainer}>
            <div className={dialogueimage}>
                <img src={taylorprofile} />
            </div>
            <div className={dialoguetext}>
                <p><b>Taylor:</b> Alexa, open Sage Recipes.</p>
            </div>
        </div>
        <div className={dialoguecontainer}>
            <div className={dialogueimage}>
                <img src={sageprofile} />
            </div>
            <div className={dialoguetext}>
                <p><b>System:</b> {"Hi, welcome back to Sage Recipes. Did you know, that I can help you meal prep for the week? Just say help me meal prep. What would you like to do today?"}</p>
            </div>
        </div>
        <div className={dialoguecontainer}>
            <div className={dialogueimage}>
                <img src={taylorprofile} />
            </div>
            <div className={dialoguetext}>
                <p>I want to cook creamy mushroom stroganoff.</p>
            </div>
        </div>
        <div className={dialoguecontainer}>
            <div className={dialogueimage}>
                <img src={sageprofile} />
            </div>
            <div className={dialoguetext}>
                <p>{"Great! Let's get started. You will need: cashews, water, mushrooms, vegan butter, yellow onion, sea salt, black pepper, garlic, thyme, cornstarch, dijon mustard, and noodles. Would you like to start cooking?"}</p>
            </div>
        </div>
        <div className={dialoguecontainer}>
            <div className={dialogueimage}>
                <img src={taylorprofile} />
            </div>
            <div className={dialoguetext}>
                <p>{"What is a substitute for yellow onion?"}</p>
            </div>
        </div>
        <div className={dialoguecontainer}>
            <div className={dialogueimage}>
                <img src={sageprofile} />
            </div>
            <div className={dialoguetext}>
                <p>{"You can substitute yellow onion for white onion, shallots, or leaks. Would you like to choose one of these substitutes?"}</p>
            </div>
        </div>
        <div className={dialoguecontainer}>
            <div className={dialogueimage}>
                <img src={taylorprofile} />
            </div>
            <div className={dialoguetext}>
                <p>{"Shallots."}</p>
            </div>
        </div>
        <div className={dialoguecontainer}>
            <div className={dialogueimage}>
                <img src={sageprofile} />
            </div>
            <div className={dialoguetext}>
                <p>{"Great, I have replaced yellow onion with shallots in creamy mushroom stroganoff recipe. Do you want to start cooking? Or make another substitution?"}</p>
            </div>
        </div>
        <div className={dialoguecontainer}>
            <div className={dialogueimage}>
                <img src={taylorprofile} />
            </div>
            <div className={dialoguetext}>
                <p>{"Let's get cooking!"}</p>
            </div>
        </div>
        <h1>Sitemap</h1>
        <p>I used Draw.io to create a sitemap in order to provide a view of Sage's information architecture and to better understand the navigation and features of the app.</p>
        <img width="100%" src={sagesitemap}></img>
        <h1>User Flows</h1>
        <p>These flows were created to make sure I was understanding the full interactions between my users and the Sage app. These flows also helped me to understand the features and how the system would parse out information. The main user flows I focused on were the system suggesting a recipe, the cooking process and how the user would make a substitution as these are key features for someone with dietary restrictions.</p>
        <p>Review all <a href="https://drive.google.com/file/d/1cBbQY-4sXqLL4fO5WG61knjoCQIf7uTx/view?usp=sharing" target="_blank">User Flows</a>.</p>

      <UserFlow
        number="1: System Suggests a Recipe Intent"
        entryPoint="Launch Application."
        successCriteria="Found recipe (suiting users criteria) to make."
        imageSrc={sageuserflow1}
      />
      <UserFlow
        number="2: Cooking and Substitution Intents"
        entryPoint="Launch Application."
        successCriteria="User is able to make a substitution and then continue cooking the recipe."
        imageSrc={sageuserflow2}
      />
      <h1>Scripts</h1>
      <p>Using my sample dialogues and user flows I created scripts that included utterances, prompts and sample phrases of my core features to get a more complete view of my application.</p>
      <p>Review full <a href="https://docs.google.com/spreadsheets/d/1BsxGleNy8y6PTJ1B4zuizQcoStGhM3Uo6Avzfw5SJZU/edit?usp=sharing" target="_blank">Script</a> (Spreadsheet).</p>
      <div style={{display: "flex", marginTop: "5%"}}>
        <div style={{flex: "50%"}}>
          <img style={{width: "50%", marginTop: "20%", transform: "translateX(40%)"}} src={sageprototype} />
        </div>
        <div style={{flex: "50%"}}>
          <h1>Prototype</h1>
          <p>
              {"After creating figuring out lots of utterences, prompts and slots for my core features, I translated my scripts into low-fidelity prototypes. I started on the Alexa Developer portal, but realized I had some coding issues with the features I needed to test so I turned to Voice Flow which was a more visual medium where I could create a working prototype to test with my usability test participants. The goal of this lo-fidelity prototype was to convey the function and responses of the voice assistant so that I could get feedback from potential users on pain points and goal completion."}
          </p>
        </div>
      </div>
      <div style={{display: "flex", marginTop: "5%"}}>
        <div style={{flex: "50%"}}>
          <h1>Usability Test Plan</h1>
          <p>
              At this point in the design process, I was ready to validate my designs through testing my prototypes to collect feedback, and iterate on my designs.
          </p>
          <p>Read the full <a href="https://drive.google.com/file/d/1luTA-i8BLe3spN43zd85kbzzBKffMqv9/view?usp=sharing" target="_blank">Usability Test Plan</a> (PDF) which includes goals, test objectives, methods, participants, and metrics.</p>
          <h1>Usability Test Script</h1>
          <p>
              Read full <a href="https://drive.google.com/file/d/1G8uytYYoM9lLifoGClRKvF3OD97S86Fs/view?usp=sharing" target="_blank">Usability Test Script</a> (PDF).
          </p>
        </div>
        <div style={{flex: "50%"}}>
          <img style={{width: "75%", transform: "translateX(20%)"}} src={sageparticipants} />
        </div>
      </div>
      <h1>Affinity Map</h1>
      <p>{"After conducting user interviews, I went through the responses and noted anything regarding participants' thoughts, feelings, behaviours, and errors. Once I was finished organizing my notes according to the participant's responses (each colour of sticky note represents a different user) I created an affinity map with clusters of similar insights. I also grouped common utterances to add to my app."}</p>
      <img className="image-left" width="50%" src={sageobservations} />
      <img className="image-right" width="50%" src={sageerrors} />
      <h1>Utterances</h1>
      <img width="100%" src={sageutterances} />
      <h1>Rainbow Spreadsheet</h1>
      <img width="100%" src={sagerainbow} />
      <h1>Metric Results</h1>
      <img width="100%" src={sagemetrics} />
      <h1>Reporting Findings</h1>
      <p><b>Learnability Results</b></p>
      <p>The <b>success rate</b> for this app was <b>high</b> since almost all of the time participants were able to accomplish the basic tasks and understand the functionality of the app very easily. Only a few were unsure for a few seconds before getting back on track.</p>
      <p><b>Satisfaction Results</b></p>
      <p>When we look at the satisfaction rating for substituting an ingredient, the average satisfaction rate was 5.8/7 and for repeating a step was 5.0/7. These being the lowest scores coupled with comments from participants suggested that <b>utterances for the app needed to be improved.</b></p>
      <h1>Design Iterations</h1>
      <p>Using my usability testing report I made some iterations to my designs by taking the most severe issues and finding solutions to the problems.</p>
      <p><b>Issue #1:</b></p>
      <p>{"The first big iteration that came from usability testing was that the majority of participants felt the system persona was too robotic and not friendly enough."}</p>
      <p><b>Change:</b></p>
      <p>{"From this I re-wrote the scripts to be more like a coach in your corner vs just an instructional voice."}</p>
      <p><b>Value:</b></p>
      <p>{"This change means users will feel more positively towards the system and want to use the app more often."}</p>
      <Quote
        text="System was too robotic, it could have been more coloquial or friendly."
        author="Jack (29)"
      />
      <p><b>Issue #2:</b></p>
      <p>{"Usability testing showed that users would use a vast variety of utterances that weren't included in the orginal prototypes and scripts."}</p>
      <p><b>Change:</b></p>
      <p>{"I add all the participants utterances as well as some others based off of some competitive research to ensure I had a wider range of utterances. I believe this is an item that will need to be tested again to make sure I have enough variety."}</p>
      <p><b>Value:</b></p>
      <p>{"This change allows users to speak with the system in a way that is more natural to them."}</p>
      <Quote
        text="I was hesitant to give command because I wasn't sure what the exact correct command was."
        author="Alan (25)"
      />
      <p><b>Issue #3:</b></p>
      <p>{"Usability testing uncovered that some participants found the amount of content overwhelming in some steps."}</p>
      <p><b>Change:</b></p>
      <p>{"To iterate on this content I went through the scripts and made sure the ingredients were split into 3 items at a time (the user would say next or continue to hear the next few items) and the instructions were broken into smaller pieces that were easier to follow."}</p>
      <p><b>Value:</b></p>
      <p>{"This change will result in the user having an easier time using the app and feeling more comfortable and confident when cooking with Sage."}</p>
      <Quote
        text="I think I would prefer to have the ingredients in smaller chunks."
        author="Dan (28)"
      />
      <p><b>Issue #4:</b></p>
      <p>{"It became clear that users wished they could save a recipe at different points of their interaction with the app. Some wanted to be able to save the recipe as soon as they heard the name of the recipe, some after they had heard the ingredients and some once the meal was cooked."}</p>
      <p><b>Change:</b></p>
      <p>{"I made sure the recipes were savable to the users favourites at anypoint throughout the interaction."}</p>
      <p><b>Value:</b></p>
      <p>{"This change allows users to save the recipe when they wanted to without them having to get to a certain point in the flow before doing so."}</p>
      <Quote
        text="I want to be able to save the recipe after hearing ingredients."
        author="Dan (28)"
      />
      <p><b>Issue #5:</b></p>
      <p>{"Usability testing uncovered that most participants wanted the app to be multimodal so that they visual cues while they were cooking."}</p>
      <p><b>Change:</b></p>
      <p>{"To iterate on this I would want to create screens that would go with the voice system so that users could view the ingredients, measurements of ingredients and instructions in a visual format as well."}</p>
      <p><b>Value:</b></p>
      <p>{"This change will result users being able to fully understand the recipe and feel confident using the Sage Recipe app."}</p>
      <Quote
        text="My main concern - I could never use it if it was just voice. I will forget immediately. I need it on my screen. But it would be good for multimodal so I can have it scroll even with food on my hands."
        author="Katey (29)"
      />
      <p><b>The usability tests also confirmed the following:</b></p>
        <ul style={{fontSize: "2vw"}}>
          <li>That users should be able to search for recipes based on what's in their fridge, based on their dietary restrictions, and based on the time they have to cook.</li>
          <li>That the system should suggest 3 recipes at a time.</li>
          <li>That the grocery list feature should allow for users to add their most bought or 'common' items' to their latest grocery lists.</li>
          <li>That advanced users should get a new fact about the app and what it can do each time it opens.</li>
        </ul>
      <h1>Summary</h1>
      <p>{"I feel that I was able to create a nutritional and cooking voice application that solves the problem 'making a meal can be difficult in today's busy world' by providing those with dietary restrictions a way to quickly and easily search for recipes without having to be concerned that their search results will show them recipes they can't eat."}</p>
      <p>{"In my next iterations I would like to first do more lo-fi testing with a new script that adjusts the system persona to be more a coach voice than an instructional robotic voice. Once I am confident that the persona is enjoyable for users to interact with I would want to build out a multimodal high-fidelity prototype so that I can do more testing with visuals and the speech that would go along with the visuals."}</p>
      <p>{"My hope is that when users are using Sage Recipes they feel relaxed and at easy knowing that they can make meals that won't cause harm to their bodies easily."}</p>
      <h1>Retrospective:</h1>
      <p>{"My original intention was to design a nutrition and cooking voice application that was particularily helpful for those with dietary restrictions. My biggest challenge was creating the system persona. Although, I knew what kind of personality I wanted the system to have, it was difficult to get that persona to come through in the scripts when the scripts had to be kept short and to the point without too much extra fluff. I found it facinating that although I had little touches of my system persona in my scripts it didn't come through enough for most participants and they felt it was too instructional and robotic. Finding a balance of cognitive load and personality was tricky but I put in a few extra adjectives and changed the instructionals to include a few more personality elements."}</p>
      <p>{"Although, I really enjoyed the challenge of thinking in terms of voice design vs visual design, my favourite part was analyzing my usability tests and finding ways to iterate on my original designs. I knew there were tons of ways to say the same information but I thought I had enough utterances that would work for the system. I expected to get some new ones I didn't realize that I would need so many new utterances! I learned that even when you think you have a lot of utterances there are always so many others to include."} </p>
      <img width="100%" className="image-left" src={cooking} />
    </div>
  </div>
)

export default SagePage
