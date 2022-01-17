import classNames from "classnames"
import React from "react"
import {quoteContainer, quoteLine, authorLine} from "./quote.module.css"

const Quote = ({className, text, author}) => (
  <div className={classNames(className, quoteContainer)}>
    <p className={quoteLine}>{text}</p>
    <p className={authorLine}>{"~ "}{author}</p>
  </div>
)

export default Quote
