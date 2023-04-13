import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FirebaseAuthService } from "../../firebase/FirebaseAuthService";

export const LoginGoogle = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const handleLoginWithGoogle = async () => {
    try {
      await FirebaseAuthService.logInWithGoogle();
      navigate("/");
    } catch (error) {
      alert("Connection Error. Please try again later.");
    }
  };
  function registerWithGoogleHandler() {
    setIsLoading(true);
    handleLoginWithGoogle();
  }

  return (
    <div className="columns is-centered mt-6">
      <div className="column is-one-third">
        <h1 className="title has-text-centered">Sign In with Google</h1>
        <form
          className="box is-flex is-justify-content-center"
          onSubmit={() => {
            registerWithGoogleHandler();
          }}
        >
          <button
            disabled={isLoading}
            type="submit"
            className="button is-primary"
          >
            {isLoading ? "Loading..." : "Google"}
          </button>
        </form>
      </div>
    </div>
  );
};
