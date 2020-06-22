import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";

import Avatar from "./Avatar";

describe("<Avatar />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Avatar src="avatar.png" name="Alice" />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders this UI as expected", () => {
    const tree = renderer
      .create(<Avatar src="avatar.png" name="Alice" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});