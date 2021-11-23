import React from "react"

const CurvedText = ({text, textClassName}) => (
  <svg viewBox="0 0 100 100">
    <path
      id="curve"
      d="M 10 20 Q 50 10 90 20"
      fill="transparent"
    />
    <text
      className={textClassName}
    >
      <textPath
        xlinkHref="#curve"
        textAnchor='middle'
        startOffset="50%"
      >
        {text}
      </textPath>
    </text>
  </svg>
)

export default CurvedText
