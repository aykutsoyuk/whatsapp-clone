import React, { useState, useEffect } from "react";
import "../styles/Messages.styles.css";
import { db } from "../db/index.js";

const Chats = () => {
  const [chats, setChats] = useState([]);

  useEffect(() => {
    db.collection("chats").onSnapshot((snapshot) =>
      setChats(snapshot.docs.map((data) => data.data()))
    );
  }, []);
  console.log(chats);
  return (
    <div className="main">
      <header className="messages-header">
        <span className="messages-avatar">
          <img className="messages-avatar-image" />
        </span>
        <h2>Chats</h2>
      </header>
      {!!chats[0] ? (
        <ul className="messages-list">
          <li className="messages-list-item">
            <span className="messages-avatar">
              <img className="messages-avatar-image" />
            </span>
            <h4 className="messages-item-header">{chats[0].id}</h4>
          </li>
          <li className="messages-list-item">
            <span className="messages-avatar">
              <img className="messages-avatar-image" />
            </span>
            <h4 className="messages-item-header">Joshua Mon Tecart</h4>
          </li>
          <li className="messages-list-item">
            <span className="messages-avatar">
              <img className="messages-avatar-image" />
            </span>
            <h4 className="messages-item-header">Joshua Mon Tecart</h4>
          </li>
          <li className="messages-list-item">
            <span className="messages-avatar">
              <img className="messages-avatar-image" />
            </span>
            <h4 className="messages-item-header">Joshua Mon Tecart</h4>
          </li>
        </ul>
      ) : (
        "Loading"
      )}
    </div>
  );
};

export default Chats;
