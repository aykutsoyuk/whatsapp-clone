import React, { useState, useEffect } from "react";
import "../styles/Messages.styles.css";
import UsersModal from "../components/UsersModal";
import { db } from "../db/index.js";
import { Link, Redirect } from "react-router-dom";
import firebase from "firebase";

const Chats = () => {
  const [chats, setChats] = useState([]);
  const currentUser = firebase.auth().currentUser;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    db.collection("users").onSnapshot((snapshot) =>
      setUsers(snapshot.docs.map((data) => data.data()))
    );
  }, []);

  useEffect(() => {
    db.collection("chats").onSnapshot((snapshot) =>
      setChats(snapshot.docs.map((data) => data.data()))
    );
  }, []);

  const openModal = () => {
    users && setUsers(users.filter((user => user.name !== currentUser.displayName)))
    setIsModalOpen(true);
  };

  return (
    <div className="main">
      {!currentUser && <Redirect to="/" />}
      <header className="messages-header">
        <span className="messages-avatar">
          <img className="messages-avatar-image" />
        </span>
        <h2>Chats</h2>
        <button onClick={openModal}>Create Chat</button>
      </header>
      {!!chats[0] ? (
        <ul className="messages-list">
          {chats?.map((item) => (
            <Link to={`chat/${item.id}`} key={item.id}>
              <li key={item.id} className="messages-list-item">
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
      {isModalOpen && (
        <UsersModal
          currentUser={currentUser}
          users={users}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </div>
  );
};

export default Chats;
