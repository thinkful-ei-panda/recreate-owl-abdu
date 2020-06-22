import React from "react";
import StageParticipant from "./StageParticipant";
import "./Stage.css";

export default function Stage(props) {
  const participants = props.participants
    .filter(participant => participant.onStage)
    .map(participant => (
      <StageParticipant
        key={participant.id}
        name={participant.name}
        avatar={participant.avatar}
      />
    ));
  return <div className="stage">{participants}</div>;
}