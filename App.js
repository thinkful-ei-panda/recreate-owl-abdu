
import React from "react";
import { participants, chatEvents } from "./data";
import ParticipantList from "./ParticipantList";
import Chat from './Chat';
import Stage from "./Stage";
import "./App.css";

export default function App(props) {
  return (
    <div className="app">
      {/* <ParticipantList participants={participants} /> */}
      <Chat events={chatEvents} participants={participants}/>
      <Stage participants={participants} />
    </div>
  );
}