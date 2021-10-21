import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import PropTypes from "prop-types";
import { Switch } from "react-router-dom";
import HomeView from "./views/HomeView";
import AppBar from "./components/AppBar";
import RegisterView from "./views/RegisterView";
import LoginView from "./views/LoginView";
import { authOperations } from "./redux/auth";
import ContactsView from "./views/ContactsView";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import { authSelectors } from "./redux/auth";

export default function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);
  return (
    <div className="App">
      {isFetchingCurrentUser ? (
        <h1>Показываем React Skeleton</h1>
      ) : (
        <>
          <AppBar />
          <Switch>
            <PublicRoute exact path="/">
              <HomeView />
            </PublicRoute>
            <PublicRoute path="/register" restricted>
              <RegisterView />
            </PublicRoute>
            <PublicRoute path="/login" restricted>
              <LoginView />
            </PublicRoute>
            <PrivateRoute path="/contacts">
              <ContactsView />
            </PrivateRoute>
          </Switch>
        </>
      )}
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
