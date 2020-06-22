import React from "react";
import "./Avatar.css";

export default function Avatar(props) {
  return (
    <img
      className="avatar"
      src={props.src}
      alt={`Avatar for ${props.name}`}
    />
  );
}
