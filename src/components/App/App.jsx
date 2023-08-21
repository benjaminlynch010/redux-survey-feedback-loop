import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Header from '../Header/Header'
import Navbar from '../Navbar/Navbar'
import Admin from '../Admin/Admin'
import Feelings from "../Feelings/Feelings";
import Understanding from "../Understanding/Understanding"
import Support from "../Support/Support"
import Comments from "../Comments/Comments";
import Review from "../Review/Review"

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


function App() {
  return (
    <div className="App">
      <div>
        <Header />
      </div>
      
      <Router>
        <Navbar />
        <Route exact path="/">
          <Feelings />
        </Route>
        <Route exact path="/admin">
          <Admin />
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
