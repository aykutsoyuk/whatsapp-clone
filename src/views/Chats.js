import React, { useState, useEffect } from "react";
import "../styles/Messages.styles.css";
import { db } from "../db/index.js";
import { Link } from "react-router-dom";
import firebase from "firebase"

const Chats = () => {
  const [chats, setChats] = useState([]);
  const user = firebase.auth().currentUser;

  useEffect(() => {
    db.collection("chats").onSnapshot((snapshot) =>
      setChats(snapshot.docs.map((data) => data.data()))
    );
  }, []);
  console.log("chats", chats);
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
          {chats?.map((item) => (
            <Link to={`chat/${item.id}`} key={item.id}>
              <li className="messages-list-item">
                <span className="messages-avatar">
                  <img className="messages-avatar-image" />
                </span>
                <h4 className="messages-item-header">{item.id}</h4>
              </li>
            </Link>
          ))}
        </ul>
      ) : (
        "Loading"
      )}
    </div>
  );
};

export default Chats;
