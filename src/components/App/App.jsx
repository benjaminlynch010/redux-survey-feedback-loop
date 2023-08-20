import React, { Component } from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";

import "./App.css";
import Admin from '../Admin/Admin'
import Navbar from "../Navbar/Navbar"
import Feelings from "../Feelings/Feelings";
import Understanding from "../Understanding/Understanding"
import Support from "../Support/Support"
import Comments from "../Comments/Comments";
import Review from "../Review/Review"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>

      <Router>
        <Navbar />
        <div>
          <Route exact path="/admin">
            <Admin />
          </Route>
          <Route exact path="/Feelings">
            <Feelings />
          </Route>
          <Route exact path="/Understanding">
            <Understanding />
          </Route>
          <Route exact path="/Support">
            <Support />
          </Route>
          <Route exact path="/Comments">
            <Comments />
          </Route>
          <Route exact path="/Review">
            <Review />
          </Route>
        </div>
      </Router>
    </div>
  );
}

export default App;
