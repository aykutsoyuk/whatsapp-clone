import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router";
import "../styles/Chat.styles.css";
import { db } from "../db/index.js";
import { Link } from "react-router-dom";
import firebase from "firebase"

const MyChat = () => {
  const formRef = useRef();
  const [message, setMessage] = useState("");
  const [channel, setChannel] = useState({});
  const [chatMember, setChatMember] = useState({})
  const { chatID } = useParams();
  const user = firebase.auth().currentUser;

  useEffect(() => {
    db.collection("chats")
      .where("id", "==", parseInt(chatID))
      .get()
      .then((snapshot) => setChannel(snapshot.docs[0].data()));
  }, []);

  const memberID = channel?.members?.filter(id => id !== user?.uid)

  useEffect(() => {
    memberID &&
    db.collection("users")
      .where("id", "==", memberID[0])
      .get()
      .then((snapshot) => setChatMember(snapshot?.docs[0]?.data()));
  }, [memberID]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (message) {
      console.log(message);
      setMessage("");
    }
  };

  const catchEnter = (e) => {
    if (e.keyCode === 13) {
      formRef.current.submit();
    }
  };

  return (
    <div className="main">
      <header className="chat-header">
        <Link to="/chats">
        <button className="chat-back-button">Back</button>
        </Link>
        <span className="chat-avatar">
          <img className="chat-avatar-image" />
        </span>
        <h3>{ chatMember?.name }</h3>
      </header>
      <div className="chat-body">
        {channel?.messages?.map((message) => (
          <div
            key={message.id}
            className={
              message.sender_id === user.uid
                ? "chat-bubble myMessage"
                : "chat-bubble"
            }
          >
            {message.text}
          </div>
        ))}
      </div>
      <form className="chat-form" ref={formRef}>
        <input
          className="chat-input"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Write a message"
          type="text"
        />
        <button
          className="chat-send-button"
          type="submit"
          onKeyDown={catchEnter}
          onClick={sendMessage}
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default MyChat;
