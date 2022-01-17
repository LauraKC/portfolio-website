import classNames from "classnames"
import React from "react"
import { animatedTitle, purpleUnderline } from "./animated-title.module.css"

const AnimatedTitle = () => (
  <div className={animatedTitle}>
    <h1><span className={classNames("purple-underline", purpleUnderline)}>C</span>reating</h1>
    <h1>remarkable</h1>
    <h1>digital</h1>
    <h1>experiences</h1>
  </div>
)
export default AnimatedTitle
