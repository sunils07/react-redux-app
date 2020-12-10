import React from 'react';
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


import HomePage from "./pages/home/home.page";
import UserPage from "./pages/user/user.page";
import PostPage from "./pages/post/post.page";

import store from "./lib/redux/store";

import 'bootstrap/dist/css/bootstrap.min.css';
import './app.scss';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/user/:id" component={UserPage} />
          <Route exact path="/post/:userId/:id" component={PostPage} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
