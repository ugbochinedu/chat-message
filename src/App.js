import React, { useState } from "react";
import Chat from "./components/chat";
import Message from "./components/message";


function App() {

  const [enteredMessage, setEnteredMessage] = useState([])

  const addMessageHandler = (message) =>{
    setEnteredMessage((prevUserMessage) => {
      return [...prevUserMessage, {message: message, id: Math.random().toString()}];
    });
  }

  return (
    <div className="App">
      <Chat onAddMessage={addMessageHandler}/>
      <Message userMessages={enteredMessage}/>
    </div>
  );
}

export default App;
