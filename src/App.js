import "./App.css";
import React, { Component, Suspense, lazy } from "react";
import { Switch } from "react-router-dom";
import Container from "./components/Container/Container";
import AppBar from "./components/AppBar";
// import HomeView from "./views/HomeView";
// import RegisterView from "./views/RegisterView";
// import LoginView from "./views/LoginView";
// import ContactsView from "./views/ContactsView";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import authOperations from "./redux/auth/auth-operations";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Loader from "./components/Loader/Loader";

const HomeView = lazy(() =>
  import("./views/HomeView" /*webpackChunkName: 'home-page' */)
);
const RegisterView = lazy(() =>
  import("./views/RegisterView" /*webpackChunkName: 'register' */)
);
const LoginView = lazy(() =>
  import("./views/LoginView" /*webpackChunkName: 'Login' */)
);

const ContactsView = lazy(() =>
  import("./views/ContactsView" /*webpackChunkName: 'phone-book' */)
);

class App extends Component {
  static propTypes = {
    onGetCurretnUser: PropTypes.func,
  };
  componentDidMount() {
    this.props.onGetCurretnUser();
  }

  render() {
    return (
      <Container>
        <AppBar />

        <Switch>
          <Suspense fallback={<Loader />}>
            <PublicRoute exact path="/" component={HomeView} />
            <PublicRoute
              path="/register"
              restricted
              redirectTo="/contacts"
              component={RegisterView}
            />
            <PublicRoute
              path="/login"
              restricted
              redirectTo="/contacts"
              component={LoginView}
            />
            <PrivateRoute
              path="/contacts"
              redirectTo="/login"
              component={ContactsView}
            />
          </Suspense>
        </Switch>
      </Container>
    );
  }
}

const mapDispatchToProps = {
  onGetCurretnUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
