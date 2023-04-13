import { PageNavLink } from "../PageNavLink";
import { useSelector } from "react-redux";
import React from "react";
import { FirebaseAuthService } from "../../firebase/FirebaseAuthService";

export const MainNav = () => {
  const { user } = useSelector((state) => state.auth);

  const handleLogOut = () => {
    FirebaseAuthService.logOutUser();
  };

  return (
    <nav className="navbar is-dark px-4">
      <div className="navbar-brand">
        <PageNavLink to="/" text="Home" />
        {!user && <PageNavLink to="logingoogle" text="Login" />}
        <PageNavLink to="news" text="News" />
        <PageNavLink to="profile" text="Profile" />
      </div>
      {user && (
        <div className="navbar-end py-2">
          <button
            onClick={handleLogOut}
            style={{ height: "100%" }}
            className="button is-danger"
            type="button"
          >
            LogOut
          </button>
        </div>
      )}
    </nav>
  );
};
