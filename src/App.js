import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./views/Login"
import MyChat from "./views/MyChat"
import Chats from "./views/Chats"

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Chatsapp</h1>
        </header>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/chats">
            <Chats />
          </Route>
          <Route path="/chat/:id">
            <MyChat />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
