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

  const findMyChats = (allChats) => {
    return allChats?.filter((chat) => chat.members.includes(currentUser.uid));
  };

  const openModal = () => {
    users &&
      setUsers(users.filter((user) => user.name !== currentUser.displayName));
    setIsModalOpen(true);
  };

  // const findMyChatMember = (members) => {
  //   console.log("chats", chats);
  //   const memberID = members?.filter((item) => item !== currentUser?.uid);
  //   console.log("memberID", memberID[0]);

  //   const member = db
  //       .collection("users")
  //       .where("id", "==", memberID[0])
  //       .get()
  //       .then((snapshot) => snapshot?.docs[0]?.data())

  //   console.log(member)

  //   return member?.email
  // };

  return (
    <div className="main">
      {!currentUser && <Redirect to="/" />}
      <header className="messages-header">
        <h2>Chats</h2>
        <button onClick={openModal}>Create Chat</button>
      </header>
      {!!chats[0] ? (
        <ul className="messages-list">
          {findMyChats(chats)?.map((item) => (
            <Link to={`chat/${item.id}`} key={item.id}>
              <li key={item.id} className="messages-list-item">
                <span className="messages-avatar">
                  <img className="messages-avatar-image" />
                </span>
                <h4 className="messages-item-header">
                  {/* {findMyChatMember(item.members)} */}
                  {item.id}
                </h4>
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
