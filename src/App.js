import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./views/Login";
import MyChat from "./views/MyChat";
import Chats from "./views/Chats";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Chatsapp</h1>
      </header>
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/chats">
            <Chats />
          </Route>
          <Route path="/chat/:chatID">
            <MyChat />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
