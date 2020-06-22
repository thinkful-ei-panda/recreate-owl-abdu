import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";

import ChatMessage from "./ChatMessage";

describe("<ChatMessage />", () => {
  const alice = {
    id: 4,
    name: "Alice",
    avatar: "avatar.png",
    inSession: true,
    onStage: true
  };

  const timestamp = 1574467205;

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <ChatMessage
        participant={alice}
        message="Test message"
        timestamp={timestamp}
      />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders this UI as expected", () => {
    const tree = renderer
      .create(
        <ChatMessage
          participant={alice}
          message="Test message"
          timestamp={timestamp}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});