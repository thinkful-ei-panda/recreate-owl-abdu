import React from "react";
import ReactDOM from 'react-dom'
import ChatEvent from "./ChatEvent";
import "./Chat.css";

export default function Chat(props) {
  const events = props.events.map((event, index) => (
    <li key={index}>
      <ChatEvent
        type={event.type}
        message={event.message}
        timestamp={event.timestamp}
        participant={props.participants.find(
          participant => participant.id === event.participantId
        )}
      />
    </li>
  ));
  return <ul className="chat">{events}</ul>;
}

// Props
// events -> array of objects with type, message, timestamp, participantId
// participants -> array of objects with id

ReactDOM.render(
  <Chat
    events={[
      { type: "thumbs-up", message: "", timestamp: 1233456, participantId: 4 },
      { type: "chat-message", message: "Hello world", timestamp: 1233457, participantId: 5 },
    ]}
    participants={[{id: 4}, {id: 5}]}
  />,
);

ReactDOM.render(
  <Chat
    events={[
      { type: "thumbs-up", message: "", timestamp: 1233456, participantId: 4 },
    ]}
    participants={[{id: 5}]}
  />,
);