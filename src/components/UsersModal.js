import React from "react";
import "../styles/UsersModal.styles.css";
import { db } from "../db/index.js";

const UsersModal = (props) => {
  const createChat = async (user) => {
    const uniqueID = Math.random().toString(36).substr(2, 9);
    const chatBody = {
      id: uniqueID,
      members: [user?.id, props.currentUser?.uid]
    };
    await db.collection("chats").doc(chatBody.id).set(chatBody);
    props.setIsModalOpen(false)
  };

  return (
    <div className="modalWrapper">
      <div className="modal">
        <h3>Create a chat</h3>
        <button
          className="closeButton"
          onClick={() => props.setIsModalOpen(false)}
        >
          X
        </button>
        <ul className="chatList">
          {props.users?.map((user) => (
            <li key={user.id} className="chatList-item">
              <button onClick={() => createChat(user)}>{user.name}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UsersModal;
