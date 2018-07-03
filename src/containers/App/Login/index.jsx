import React, { Component } from "react";
import Loadable from "react-loadable";
import fakeDelay from "../../../components/fakeDelay";
import path from "path";
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";

// material ui
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";

function Loading({ error }) {
  if (error) {
    return "Error!";
  } else {
    return <h3>Loading...</h3>;
  }
}

/* eslint-disable */
let login = Loadable({
  loader: () => fakeDelay(400).then(() => import("../../User/login")),
  loading: Loading,
  serverSideRequirePath: path.resolve(__dirname, "../../User/login")
});

let reset = Loadable({
  loader: () => fakeDelay(400).then(() => import("../../User/reset")),
  loading: Loading,
  serverSideRequirePath: path.resolve(__dirname, "../../User/reset")
});

let create = Loadable({
  loader: () => fakeDelay(400).then(() => import("../../User/create")),
  loading: Loading,
  serverSideRequirePath: path.resolve(__dirname, "../../User/create")
});

let errorNotFound = Loadable({
  loader: () => fakeDelay(400).then(() => import("../../Errors/404")),
  loading: Loading,
  serverSideRequirePath: path.resolve(__dirname, "../../Errors/404")
});

let errorInternal = Loadable({
  loader: () => fakeDelay(400).then(() => import("../../Errors/500")),
  loading: Loading,
  serverSideRequirePath: path.resolve(__dirname, "../../Errors/500")
});
/* eslint-enable */

// styles temp , do refatore to import styles.css
const styles = {
  colRight: {
    backgroundColor: "#3b1878",
    height: "100vh",
    minHeight: "600px"
  },
  colLeft: {
    backgroundColor: "#4b2c82",
    minHeight: "600px"
  }
};

class Login extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            {/* CONTAINER OF VIEWS */}
            <Grid container>
              <Grid xs={12} sm={5} md={5} style={styles.colRight}>
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/reset">Reset</Link>
                <Link to="/create">Create</Link>

                {/* INSIDE ROUTES */}
                <Route exact path="/" component={login} />
                <Route exact path="/login" component={login} />
                <Route exact path="/reset" component={reset} />
                <Route exact path="/create" component={create} />
              </Grid>

              <Hidden xsDown>
                <Grid sm={7} md={7} style={styles.colLeft}>
                  SLIDE
                </Grid>
              </Hidden>
            </Grid>

            {/* ERRORS PAGE */}
            <Route path="/404" component={errorNotFound} />
            <Route path="/500" component={errorInternal} />
            <Route path={"**"} component={errorNotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Login;
