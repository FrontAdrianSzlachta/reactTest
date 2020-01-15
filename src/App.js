import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import  PeopleList  from "./components/PeopleList";
import  Person  from "./components/Person";


function App() {
  return (
      <Router>
        <Switch>
          <Route path="/person/:id" component={ Person }/>
          <Route path="/" component={ PeopleList }/>
        </Switch>
    </Router>
  );
}

export default App;
