import React from "react";
import Avatar from "./Avatar";
import "./Participant.css";

export default function Participant(props) {
  let status;
  if (props.onStage) {
    status = "on stage";
  } else if (props.inSession) {
    status = "off stage";
  } else {
    status = "not in session";
  }

  return (
    <div className="participant">
      <div className="participant-left">
        <Avatar src={props.avatar} name={props.name} />
      </div>
      <div className="participant-right">
        <div className="participant-name">{props.name}</div>
        <div className="person-stage-status">{status}</div>
      </div>
    </div>
  );
}