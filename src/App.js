import React, {useState} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Alert from "./components/Alert"
import Navigation from "./components/Navigation";
import TextUtility from "./components/TextUtility";
import About from './components/About'

export default function App() {
  const [alert, setAlert] = useState({})
  const showAlert = (message, variant) => {
    setAlert({ message: message, variant: variant});
    setTimeout(() => {
      setAlert({});
    }, 1500);
  }
  return (
    <Router>
      <Navigation />
      <Alert variant={alert.variant} message={alert.message}/>
      <Switch>
        <Route exact path="/">
          <TextUtility showAlert={showAlert}/>
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
      </Switch>
    </Router>
  );
}
