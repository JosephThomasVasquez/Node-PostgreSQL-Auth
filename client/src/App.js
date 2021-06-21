import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Views/Home";
import Login from "./Views/Login";
import Register from "./Views/Register";
import Dashboard from "./Views/Dashboard";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default App;
