import React from 'react';
import './App.css';
import Demo from './module/timeTable/timeTable';
import {
  BrowserRouter as Router,
    Route,
    Switch,Redirect
  } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route path="/" component={Demo} />
        </Switch>
    </Router>
    </div>
  );
}

export default App;
