import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";

import ChatEvent from "./ChatEvent";

describe("<ChatEvent />", () => {
  const alice = {
    id: 4,
    name: "Alice",
    avatar: "avatar.png",
    inSession: true,
    onStage: true
  };

  const timestamp = 1574467205;

  it("renders message without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <ChatEvent
        type="message"
        participant={alice}
        message="Test message"
        timestamp={timestamp}
      />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders message as expected", () => {
    const tree = renderer
      .create(
        <ChatEvent
          type="message"
          participant={alice}
          message="Test message"
          timestamp={timestamp}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders thumbs-up without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <ChatEvent type="thumbs-up" participant={alice} timestamp={timestamp} />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders thumbs-up as expected", () => {
    const tree = renderer
      .create(
        <ChatEvent type="thumbs-up" participant={alice} timestamp={timestamp} />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders thumbs-down without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <ChatEvent
        type="thumbs-down"
        participant={alice}
        timestamp={timestamp}
      />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders thumbs-down as expected", () => {
    const tree = renderer
      .create(
        <ChatEvent
          type="thumbs-down"
          participant={alice}
          timestamp={timestamp}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders clap without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <ChatEvent type="clap" participant={alice} timestamp={timestamp} />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders clap as expected", () => {
    const tree = renderer
      .create(
        <ChatEvent type="clap" participant={alice} timestamp={timestamp} />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders raise-hand without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <ChatEvent type="raise-hand" participant={alice} timestamp={timestamp} />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders raise-hand as expected", () => {
    const tree = renderer
      .create(
        <ChatEvent
          type="raise-hand"
          participant={alice}
          timestamp={timestamp}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders join without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <ChatEvent type="join" participant={alice} timestamp={timestamp} />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders join as expected", () => {
    const tree = renderer
      .create(
        <ChatEvent type="join" participant={alice} timestamp={timestamp} />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders leave without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <ChatEvent type="leave" participant={alice} timestamp={timestamp} />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders leave as expected", () => {
    const tree = renderer
      .create(
        <ChatEvent type="leave" participant={alice} timestamp={timestamp} />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders join-stage without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <ChatEvent type="join-stage" participant={alice} timestamp={timestamp} />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders join-stage as expected", () => {
    const tree = renderer
      .create(
        <ChatEvent
          type="join-stage"
          participant={alice}
          timestamp={timestamp}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders leave-stage without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <ChatEvent
        type="leave-stage"
        participant={alice}
        timestamp={timestamp}
      />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders leave-stage as expected", () => {
    const tree = renderer
      .create(
        <ChatEvent
          type="leave-stage"
          participant={alice}
          timestamp={timestamp}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});