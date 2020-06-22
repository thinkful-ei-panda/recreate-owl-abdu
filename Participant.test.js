import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";

import Participant from "./Participant";

describe("<Participant />", () => {
  const alice = {
    id: 4,
    name: "Alice",
    avatar: "avatar.png",
    inSession: true,
    onStage: true
  };

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <Participant
        id={alice.id}
        name={alice.name}
        avatar={alice.avatar}
        inSession={alice.inSession}
        onState={alice.onStage}
      />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders this UI as expected", () => {
    const tree = renderer
      .create(
        <Participant
          id={alice.id}
          name={alice.name}
          avatar={alice.avatar}
          inSession={alice.inSession}
          onState={alice.onStage}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});