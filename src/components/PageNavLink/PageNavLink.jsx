import classNames from "classnames";
import { NavLink } from "react-router-dom";
import React from "react";

export const PageNavLink = ({ text, to }) => {
  return (
    <NavLink
      to={to}
      className={(
        { isActive }) => classNames("navbar-item", { "is-active": isActive }
        )}
    >
      {text}
    </NavLink>
  );
};