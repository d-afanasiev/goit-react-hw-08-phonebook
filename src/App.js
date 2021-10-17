import "./App.css";
import PropTypes from "prop-types";
import { Switch, Route } from "react-router-dom";
import HomeView from "./views/HomeView";
import ContactForm from "./components/ContactForm";
import Filter from "./components/Filter";
import AppBar from "./components/AppBar";
import RegisterView from "./views/RegisterView";
import LoginView from "./views/LoginView";
import ContactList from "./components/ContactList";

export default function App() {
  return (
    <div className="App">
      <AppBar />
      <Switch>
        <Route exact path="/">
          <HomeView />
        </Route>
        <Route path="/register">
          <RegisterView />
        </Route>
        <Route path="/login">
          <LoginView />
        </Route>
        <Route path="/contacts">
          <h1 className="titlePhonebook">Phonebook</h1>
          <ContactForm />

          <h1 className="titleContacts">Contacts</h1>
          <Filter />
          <ContactList />
        </Route>
      </Switch>
    </div>
  );
}

App.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
};
