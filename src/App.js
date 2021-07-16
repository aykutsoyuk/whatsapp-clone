import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./views/Login"
import Chat from "./views/Chat"
import Messages from "./views/Messages"

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
          <Route path="/messages">
            <Messages />
          </Route>
          <Route path="/chat/:id">
            <Chat />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
