import React from "react";
import "../styles/Chat.styles.css"

const Chat = () => {
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
      <div className="chat-input-area">
        <input className="chat-input" placeholder="Write a message" />
        <button className="chat-send-button">Send</button>
      </div>
    </div>;
};

export default Chat;
