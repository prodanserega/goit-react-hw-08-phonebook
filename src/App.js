import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Switch, Route } from "react-router-dom";
import Container from "./components/Container/Container";
import AppBar from "./components/AppBar";
import HomeView from "./views/HomeView";
import RegisterView from "./views/RegisterView";

export default function App() {
  return (
    <Container>
      <AppBar />

      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route path="/register" component={RegisterView} />
        {/* <Route path="/login" component={LoginView} />
        <Route path="/contacts" component={Contacts} /> */}
      </Switch>
    </Container>
  );
}
