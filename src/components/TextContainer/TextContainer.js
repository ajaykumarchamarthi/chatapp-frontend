import React from "react";
import { FcConferenceCall } from "react-icons/fc";
import { FcOk } from "react-icons/fc";
import "./TextContainer.css";

const TextContainer = ({ users }) => (
  <div className="textContainer">
    {users ? (
      <div>
        <div className="activeHeader">
          <h3>People Active In Group </h3>

          <div>
            <FcConferenceCall size={50} class="groupIcon" />
          </div>
        </div>

        <div className="activeContainer">
          <h3>
            {users.map(({ name }) => (
              <div key={name} className="activeItem">
                {name} <FcOk size={22} className="groupIcon" />
              </div>
            ))}
          </h3>
        </div>
      </div>
    ) : null}
  </div>
);

export default TextContainer;
