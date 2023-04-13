import { Navigate, Route, Routes } from "react-router-dom";
import { MainNav } from "./components/MainNav";
import { HomePage } from "./pages/HomePage";
import { Login } from "./pages/Login";
import { News } from "./pages/News";
import { Profile } from "./pages/Profile";
import React, { useEffect } from "react";
import { LoginGoogle } from "./pages/LoginGoogle";
import { FirebaseAuthService } from "./firebase/FirebaseAuthService";
import { useDispatch } from "react-redux";
import { actions as authActions } from "./features/auth";

export const App = () => {
  const dispatch = useDispatch();
  const checkUser = (value) => {
    dispatch(authActions.setUser(value));
  };
  useEffect(() => {
    FirebaseAuthService.subscribeToAuthChanges(checkUser);
  }, []);
  return (
    <>
      <MainNav />

      <Routes>
        <Route path="home" element={<Navigate to="/" replace />} />
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<Login />} />
        <Route path="logingoogle" element={<LoginGoogle />} />
        <Route path="news" element={<News />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </>
  );
};
