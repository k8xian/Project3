import React from "react";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/old-home" component={Books} />
        <Route exact path="/books" component={Books} />
        <Route exact path="/books/:id" component={Detail} />
        <Route exact path="/profile" component={Profile} />
        {/* This will be the public page for any profile */}
        <Route exact path="/profile/:id" component={Profile} />
        {/* This will be the individual view for any profile with an edit button that will show/hide forms */}
        <Route exact path="/profile/:id/edit" component={Profile} />
      </Switch>
    </div>
  </Router>
);

export default App;
