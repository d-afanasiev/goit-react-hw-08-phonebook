import { useSelector } from "react-redux";
import AppBar from "@mui/material/AppBar";
import Navigation from "./Navigation";
import UserMenu from "./UserMenu";
import AuthNav from "./AuthNav";
import { authSelectors } from "../redux/auth";
import css from "../styles/AppBar.module.css";

export default function MainAppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <AppBar
      position="static"
      className={css.header}
      sx={{ flexDirection: "row" }}
    >
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </AppBar>
  );
}
