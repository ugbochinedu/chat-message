import React from "react";
import img from "./images/photo-1.jpeg";
// import Card from "./UI/Card";
// import "./message.css";
import styles from "./message.module.css";

const Message = (props) => {
  console.log(props.userMessages);

  return (
    <div className={styles.msg}>
      {/* <ul> */}
      {/* <img id="img" src={img} alt="" /> */}
      {props.userMessages.map((userMessage) => (
        <ul key={userMessage.id}>
          <img id="img" src={img} alt="" />
          <li>{userMessage.message}</li>
        </ul>
      ))}
      {/* <div className="main">
          <img id="img" src={img} alt="" />
          <div className="msg-box">{props.message}</div>
        </div> */}
      {/* </ul> */}
    </div>
  );
};

export default Message;
