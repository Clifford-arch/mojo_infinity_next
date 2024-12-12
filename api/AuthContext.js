"use client";
import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
// import environment from "../utils/environment";
const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLogin, setIsLogin] = useState(false);
  const [redirect, setRedirect] = useState("");
  const [nextStep, setNextStep] = useState("");
  const [loadin, setLoadin] = useState(true);

  // Function to check if the user is logged in
  const checkLogin = async () => {
    setLoadin(true);
    try {
      const response = await axios.get(
        "https://sandboxwealth-frapi.mojoinfinity.com/users/check-login",
        // `${environment.API_URL}/users/check-login`,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          withCredentials: true,
        }
      );
      if (response.data.code === 200) {
        setIsLogin(response.data.data.is_login);
        setRedirect(response.data.data.redirect_url);
        setNextStep(response.data.data.next_step);
        // Store login status in localStorage for persistence
        // if (response.data.data.is_login) {
        //   localStorage.setItem("isLogin", "true");
        // } else {
        //   localStorage.removeItem("isLogin");
        // }
      }
    } catch (error) {
      console.log("Error checking login:", error);
    } finally {
      setLoadin(false);
    }
  };

  // Check login status on initial load and when reloading the page
  useEffect(() => {
    checkLogin();
  }, []);
  useEffect(() => {
    if (!loadin) {  // Prevent initial double-check
      checkLogin();
    }
  }, [isLogin]);

  return (
    <AuthContext.Provider
      value={{
        isLogin,
        redirect,
        nextStep,
        loadin,
        checkLogin,
        setIsLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
