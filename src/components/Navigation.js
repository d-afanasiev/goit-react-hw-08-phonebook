import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { authSelectors } from "../redux/auth";
import css from "../styles/Navigation.module.css";

// const styles = {
//   link: {
//     display: "inline-block",
//     textDecoration: "none",
//     padding: 12,
//     fontWeight: 700,
//     color: "#2A363B",
//   },
//   activeLink: {
//     color: "#E84A5F",
//   },
// };

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav>
      <NavLink
        to="/"
        exact
        className={css.link}
        activeClassName={css.activeLink}
      >
        Главная
      </NavLink>

      {isLoggedIn && (
        <NavLink
          to="/contacts"
          exact
          className={css.link}
          activeClassName={css.activeLink}
        >
          Телефонная книга
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
