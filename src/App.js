import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import css from "./styles/App.module.css";
import PropTypes from "prop-types";
import { Switch } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import HomeView from "./views/HomeView";
import MainAppBar from "./components/AppBar";
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
    <Box className={css.wrapperBox}>
      {isFetchingCurrentUser ? (
        <Box className={css.wrapperProgress}>
          <CircularProgress />
        </Box>
      ) : (
        <>
          <MainAppBar />
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
    </Box>
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
