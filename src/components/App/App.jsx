import React, { Component } from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";

import "./App.css";
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
        <div>
          <ul className="navbar">
            <li>
              <Link to="/">Page 1 Feelings</Link>
            </li>
            <li>
              <Link to="/2">Page 2 Understanding</Link>
            </li>
            <li>
              <Link to="/3">Page 3 Support</Link>
            </li>
            <li>
              <Link to="/Comments">Comments</Link>
            </li>
            <li>
              <Link to="/Review">Review</Link>
            </li>
          </ul>
          <Route exact path="/">
            <Feelings />
          </Route>
          <Route exact path="/2">
            <Understanding />
          </Route>
          <Route exact path="/3">
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
