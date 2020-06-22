import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";

import Chat from "./Chat";

describe("<Chat />", () => {
  const alice = {
    id: 4,
    name: "Alice",
    avatar: "avatar.png",
    inSession: true,
    onStage: true
  };
  const bob = {
    id: 10,
    name: "Bob",
    avatar: "avatar.png",
    inSession: true,
    onStage: true
  };

  const timestamp = 1574467205;

  const events = [
    {
      type: "message",
      message: "Test message",
      participantId: alice.id,
      timestamp
    },
    {
      type: "join",
      participantId: bob.id,
      timestamp
    }
  ];
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Chat events={events} participants={[alice, bob]} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders this UI as expected", () => {
    const tree = renderer
      .create(<Chat events={events} participants={[alice, bob]} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});