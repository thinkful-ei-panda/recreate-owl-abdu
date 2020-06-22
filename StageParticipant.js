import React from 'react';
import Avatar from './Avatar';
import './StageParticipant.css';

export default function StageParticipant(props) {
  return (
    <div className="stage-participant">
      <div className="stage-participant-name">
        {props.name}
      </div>
      <div className="stage-participant-avatar-wrapper">
        <div className="stage-participant-avatar">
          <Avatar src={props.avatar} name={props.name} />
        </div>
      </div>
    </div>
  );
}