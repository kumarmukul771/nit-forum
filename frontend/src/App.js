import logo from "./logo.svg";
import "./App.css";
import { Button, Grid } from "semantic-ui-react";
import Login from "./Navigation/Auth/Login";
import Register from "./Navigation/Auth/Register";
import { Route, Switch } from "react-router-dom";
import DoubtFormPage from "./Navigation/Auth/DoubtFormPage/DoubtFormPage";
import LandingPage from "./Navigation/Auth/LandingPage/LandingPage";

function App() {
  return (
    <div className="body_App">
    <Switch>
    <Route path="/" exact component={LandingPage} />
      <Route path="/doubtPage" exact component={DoubtFormPage} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </Switch>
    </div>
  );
}

export default App;
