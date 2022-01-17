import React, { useEffect, useRef } from "react"
import CircleType from "circletype"


const CurvedText = ({text}) => {
  const ref = useRef()
  useEffect(() => {
    const ct = new CircleType(ref.current)
    ct.radius(ct.element.offsetWidth / 1.5)
  }, [ref.current])
  return (
    <h1 ref={ref}>
      {text}
    </h1>
  )

}

export default CurvedText
