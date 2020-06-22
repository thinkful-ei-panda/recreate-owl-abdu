import React from "react";
import Avatar from "./Avatar";
import "./ChatMessage.css";

export default function ChatMessage(props) {
  const date = new Date(props.timestamp);
  return (
    <div className="chat-message">
      <div className="chat-message-left">
        <Avatar src={props.participant.avatar} />
      </div>
      <div className="chat-message-right">
        <div className="chat-message-participant">
          <span className="chat-message-participant-name">
            {props.participant.name}
          </span>
          <span className="chat-message-time">
            {date.getHours()}:{date.getMinutes()}
          </span>
        </div>
        <div className="chat-message-message">{props.message}</div>
      </div>
    </div>
  );
}