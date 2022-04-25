import React from "react";
import classes from "./InfoBar.module.css";
import { BsChatSquareQuote } from "react-icons/bs";
import { AiOutlinePoweroff } from "react-icons/ai";

function InfoBar({ room }) {
  return (
    <div className={classes.infoBar}>
      <div className={classes.leftInnerContainer}>
        <BsChatSquareQuote size={30} className={classes.chaticon} />
        <h3>{room}</h3>
      </div>
      <div className={classes.rigthInnerContainer}>
        <a href="/">
          <AiOutlinePoweroff size={30} className={classes.closeicon} />
        </a>
      </div>
    </div>
  );
}

export default InfoBar;
