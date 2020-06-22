import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";

import Stage from "./Stage";

describe("<Stage />", () => {
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
    ReactDOM.render(<Stage participants={[alice, bob]} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders this UI as expected", () => {
    const tree = renderer
      .create(<Stage participants={[alice, bob]} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});