import logo from "./logo.svg";
import "./App.css";
import { Button, Grid } from "semantic-ui-react";
import Login from "./Navigation/Auth/Login";
import Register from "./Navigation/Auth/Register";
import { Route, Switch } from "react-router-dom";
import DoubtFormPage from "./Navigation/DoubtFormPage/DoubtFormPage";
import LandingPage from "./Navigation/LandingPage/LandingPage";
import NotificationPage from "./Navigation/NotificationPage/NotificationPage";
import DevelopersPage from "./Navigation/DevelopersPage/DevelopersPage";
import GraphPage from "./Navigation/GraphPage/GraphPage";
import NotePage from "./Navigation/NotePage/NotePage";

function App() {
  return (
    <div className="body_App">
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/notification" exact component={NotificationPage} />
        <Route path="/doubtPage" exact component={DoubtFormPage} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/developers" exact component={DevelopersPage} />
        <Route path="/contribution" exact component={GraphPage} />
        <Route path="/note" exact component={NotePage} />
      </Switch>
    </div>
  );
}

export default App;