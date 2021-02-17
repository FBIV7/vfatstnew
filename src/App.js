import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import Routers from "./utils/Routers";
import "./App.css";
import PrivateRoute from "./utils/routing/PrivateRoute";

// redux
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";
import ResetPassword from "./components/auth/ResetPassword";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}
const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Routers />
          <Switch>
           
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
