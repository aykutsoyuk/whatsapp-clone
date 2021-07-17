import React from "react";
import "../styles/Messages.styles.css";

const Messages = () => {
  return (
    <div className="main">
      <header className="messages-header">
        <span className="messages-avatar">
          <img className="messages-avatar-image" />
        </span>
        <h2>Messages</h2>
      </header>
      <ul className="messages-list">
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
        <li className="messages-list-item">
        <span className="messages-avatar">
          <img className="messages-avatar-image" />
        </span>
        <h4 className="messages-item-header">Joshua Mon Tecart</h4>
        </li>
      </ul>
    </div>
  );
};

export default Messages;
