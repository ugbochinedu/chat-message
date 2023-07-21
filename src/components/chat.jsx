import React, { useState } from "react";
import Card from "./UI/Card";
import styles from "./chat.module.css";
import Button from "./UI/Button";
// import './chat.css'

const Chat = (props) => {
  const [inputedMessage, setinputedMessage] = useState("");

  const textareaHandler = (e) => {
    setinputedMessage(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (inputedMessage.trim().length === 0) {
      return;
    }
    console.log(inputedMessage);

    props.onAddMessage(inputedMessage)
    setinputedMessage("");
  };

  return (
    <Card className={styles.textarea}>
      <form action="" onSubmit={submitHandler}>
        <p>Comment here</p>
        <textarea
          name=""
          value={inputedMessage}
          id="textarea"
          onChange={textareaHandler}
        ></textarea>
        <Button id="btn" type="submit">
          submit
        </Button>
      </form>
    </Card>
  );
};

export default Chat;
