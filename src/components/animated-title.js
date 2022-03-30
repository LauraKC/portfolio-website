import classNames from "classnames"
import React from "react"
import { animatedTitle, purpleUnderline } from "./animated-title.module.css"

const AnimatedTitle = () => (
  <div className={animatedTitle}>
    <h1 style={{whiteSpace: "nowrap", paddingTop: "5%"}} ><span className={classNames("purple-underline", purpleUnderline)}>E</span>nthusiastic</h1>
    <h1>product</h1>
    <h1 style={{paddingBottom: "5%"}}>designer.</h1>
  </div>
)
export default AnimatedTitle
