import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { authSelectors } from "../redux/auth";
import css from "../styles/Navigation.module.css";

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
