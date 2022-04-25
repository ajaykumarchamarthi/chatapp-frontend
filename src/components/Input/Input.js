import React from "react";
import classes from "./Input.module.css";

function Input({ message, setMessage, sendMessage }) {
  return (
    <form className={classes.form}>
      <input
        className={classes.input}
        type="text"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        onKeyPress={(event) =>
          event.key === "Enter" ? sendMessage(event) : null
        }
      />
      <button
        className={classes.sendButton}
        onClick={(event) => sendMessage(event)}
      >
        Send
      </button>
    </form>
  );
}

export default Input;
