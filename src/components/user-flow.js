import React from "react"

const UserFlow = ({number, entryPoint, successCriteria, imageSrc}) => (
  <>
    <p>
      <b>{"User Flow # " + number}</b><br/>
      <b>{"Entry Point: "}</b>{entryPoint}<br/>
      <b>{"Success Criteria: "}</b>{successCriteria}<br/>
    </p>
    <img width="100%" src={imageSrc}></img>
  </>
)

export default UserFlow
