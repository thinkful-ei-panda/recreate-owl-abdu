import React from "react";
import Participant from "./Participant";
import './ParticipantList.css';

function participantSortOrder(participant) {
  if (participant.onStage) {
    return 0;
  }
  if (participant.inSession) {
    return 1;
  }
  return 2;
}

export default function ParticipantList(props) {
  const participants = props.participants
    .sort((a, b) => participantSortOrder(a) - participantSortOrder(b))
    .map(participant => (
    <li key={participant.id}>
      <Participant
        name={participant.name}
        avatar={participant.avatar}
        inSession={participant.inSession}
        onStage={participant.onStage}
      />
    </li>
  ));
  return <ul className="participant-list">{participants}</ul>;
}