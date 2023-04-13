import { useSelector } from "react-redux";
import { Loader } from "../../components/Loader";
import React from "react";

export const Profile = () => {
  const { user } = useSelector((state) => state.auth);

  return user ? (
    <section className="hero is-fullheight-with-navbar">
      <div className="hero-body ">
        <p className="title">PROFILE PAGE</p>
      </div>
    </section>
  ) : (
    <Loader path="/logingoogle" />
  );
};
