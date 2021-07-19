import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, useParams } from "react-router-dom";
import Login from "./views/Login";
import MyChat from "./views/MyChat";
import Chats from "./views/Chats";

function App() {
  const [user, setUser] = useState({});
  
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Chatsapp</h1>
        </header>
        <Switch>
          <Route exact path="/">
            <Login setUser={setUser} />
          </Route>
          <Route path="/chats">
            <Chats />
          </Route>
          <Route path="/chat/:chatID">
            <MyChat />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
