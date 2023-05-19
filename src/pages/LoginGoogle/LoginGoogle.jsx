import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FirebaseAuthService } from "../../firebase/FirebaseAuthService";

export const LoginGoogle = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLoginWithGoogle = async () => {
    setIsLoading(true);
    try {
      await FirebaseAuthService.logInWithGoogle();
      setIsLoading(false);
      navigate("/");
    } catch (error) {
      alert("Connection Error. Please try again later.");
      setIsLoading(false);
    }
  };
  return (
    <div className="columns is-centered mt-6">
      <div className="column is-one-third">
        <h1 className="title has-text-centered">Sign In with Google</h1>
        <form className="box is-flex is-justify-content-center">
          <button
            onClick={handleLoginWithGoogle}
            disabled={isLoading}
            type="button"
            className="button is-primary"
          >
            {isLoading ? "Loading..." : "Google"}
          </button>
        </form>
      </div>
    </div>
  );
};
