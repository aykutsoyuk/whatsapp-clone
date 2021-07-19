import React, { useState, useRef } from "react";
import "../styles/Chat.styles.css"

const MyChat = () => {
  const formRef = useRef()
  const [message, setMessage] = useState("");

  const sendMessage = (e) => {
    e.preventDefault()
    if(message) {
      console.log(message)
      setMessage("")
    }
  }

  const catchEnter = (e) => {
    if (e.keyCode === 13) {
      formRef.current.submit();
    }
  }

  return <div className="main">
    <header className="chat-header">
    <button className="chat-back-button">Back</button>
        <span className="chat-avatar">
          <img className="chat-avatar-image" />
        </span>
        <h3>Joshua Mon Tecart</h3>
      </header>
      <div className="chat-body">
        <div className="chat-bubble myMessage">lj laj bdfljah bdljahdbf lajhdbfgljabg lajhbg lagb aljfhdgb aljdsfhgb sljfdgb slfdjghb sdljghbsdlgjhb sdlfjgb sldgf</div>
        <div className="chat-bubble">lj aljfhdgb aljdsfhfjgb sldgf</div>
        <div className="chat-bubble">lj laj bdfljah bdljahdbf lajhdbfjdsfhgb sljfdgb slfdjghb sdljghbsdlgjhb sdlfjgb sldgf</div>
        <div className="chat-bubble myMessage">lj laj  lagb aljfjghbsdlgjhb sdlfjgb sldgf</div>
        <div className="chat-bubble">lj laj jabg lajhbg lagb al slfdjghb sdljghbsdlgjhb sdlfjgb sldgf</div>
        <div className="chat-bubble myMessage">lj laj jabg dgf</div>
        <div className="chat-bubble">lj laj bdfljah bdljahdbf lajhdbfjdsfhgb sljfdgb slfdjghb sdljghbsdlgjhb sdlfjgb sldgf</div>
        <div className="chat-bubble myMessage">lj laj  lagb aljfjghbsdlgjhb sdlfjgb sldgf</div>
        <div className="chat-bubble">lj laj jabg lajhbg lagb al slfdjghb sdljghbsdlgjhb sdlfjgb sldgf</div>
        <div className="chat-bubble myMessage">lj laj jabg dgf</div>
      </div>
      <form className="chat-form" ref={formRef}>
        <input className="chat-input" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Write a message" type="text" />
        <button className="chat-send-button" type="submit" onKeyDown={catchEnter} onClick={sendMessage}>Send</button>
      </form>
    </div>;
};

export default MyChat;
