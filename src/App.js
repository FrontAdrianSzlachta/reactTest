import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom"
import { PeopleList } from "./components/PeopleList";
import { People } from "./components/People";


function App() {
  return (
      <Router>
        <Switch>
          <Route path="/people/:id" component={ People }/>
          <Route path="/" component={ PeopleList }/>
        </Switch>
    </Router>
  );
}

export default App;
