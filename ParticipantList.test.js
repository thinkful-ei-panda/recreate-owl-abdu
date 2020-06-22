import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";

import ParticipantList from "./ParticipantList";

describe("<ParticipantList />", () => {
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

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<ParticipantList participants={[alice, bob]} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders this UI as expected", () => {
    const tree = renderer
      .create(<ParticipantList participants={[alice, bob]} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});