import React from "react";
import ChatMessage from './ChatMessage';
import './ChatEvent.css'

export default function ChatEvent(props) {
  const { timestamp, participant, type, message } = props;
  if (props.type === "message") {
    return (
      <ChatMessage
        participant={participant}
        timestamp={timestamp}
        message={message}
      />
    );
  }

  let text;
  if (props.type === "thumbs-up") {
    text = "gave a thumbs up";
  } else if (props.type === "thumbs-down") {
    text = "gave a thumbs down";
  } else if (props.type === "clap") {
    text = "clapped";
  } else if (props.type === "raise-hand") {
    text = "raise their hand";
  } else if (props.type === "join") {
    text = "joined the room";
  } else if (props.type === "leave") {
    text = "left the room";
  } else if (props.type === "join-stage") {
    text = "joined the stage";
  } else if (props.type === "leave-stage") {
    text = "left the stage";
  }
  return (
    <div className="chat-event">
      <span className="chat-event-participant-name">{participant.name}</span> {text}
    </div>
  );
}