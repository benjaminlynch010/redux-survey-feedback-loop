import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Navbar from '../Navigation/Navbar'
import "./App.css";
import Home from "../Home/Home"
import Admin from '../Admin/Admin'
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
        <Route exact path="/">
          <Home />
        </Route>
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
      </Router>
    </div>
  );
}

export default App;
