import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router";
import "../styles/Chat.styles.css";
import { db } from "../db/index.js";
import { Link, Redirect } from "react-router-dom";
import firebase from "firebase";

const MyChat = () => {
  const formRef = useRef();
  const [message, setMessage] = useState("");
  const [channelMessages, setChannelMessages] = useState([]);
  const [chatMember, setChatMember] = useState({});
  const { chatID } = useParams();
  const user = firebase.auth().currentUser;

  const chatWrapper = useRef();

  const scrollToBottom = () => {
    const target = chatWrapper.current;
    target?.scroll({ top: target?.scrollHeight, behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [channelMessages]);

  useEffect(() => {
    getMessages();
  }, []);

  console.log("channelMessages", channelMessages);

  useEffect(() => {
    db.collection("chats")
      .where("id", "==", chatID)
      .get()
      .then((snapshot) => {
        findMember(snapshot.docs[0].data());
      });
  }, []);

  const findMember = (channel) => {
    const memberID = channel?.members?.filter((item) => item !== user?.uid);
    memberID &&
      db
        .collection("users")
        .where("id", "==", memberID[0])
        .get()
        .then((snapshot) => setChatMember(snapshot?.docs[0]?.data()));
  };

  const sendMessage = (e) => {
    e.preventDefault();
    if (message && chatID) {
      db.collection("chats").doc(chatID).collection("messages").add({
        time: new Date(),
        sender_id: user?.uid,
        text: message,
      });
      setMessage("");
      getMessages();
    }
  };

  const catchEnter = (e) => {
    if (e.keyCode === 13) {
      formRef.current.submit();
    }
  };

  const getMessages = () => {
    db.collection("chats")
      .doc(chatID)
      .collection("messages")
      .orderBy("time", "asc")
      .onSnapshot((snapshot) =>
        setChannelMessages(snapshot.docs.map((doc) => doc.data()))
      );
  };

  return (
    <div className="main">
      {!user && <Redirect to="/" />}
      <header className="chat-header">
        <Link to="/chats">
          <button className="chat-back-button">Back</button>
        </Link>
        <span className="chat-avatar">
          <img className="chat-avatar-image" src={chatMember?.photo} />
        </span>
        <span>
        <h3>{chatMember?.name}</h3>
        <h5>{chatMember?.email}</h5>
        </span>
      </header>
      <div className="chat-body" ref={chatWrapper}>
        {channelMessages?.map((message) => (
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
