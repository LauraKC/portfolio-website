import React from "react"
import CurvedText from "../../components/curved-text"
import {headerContainer, curvedHeading} from "./olive.module.css"

const OlivePage = () => (
  <div className={headerContainer}>
    <CurvedText
      text="Olive Mental Health!"
      textClassName={curvedHeading}
    />
  </div>
)

export default OlivePage
