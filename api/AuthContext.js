"use client";
import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLogin, setIsLogin] = useState(false);
  const [redirectUrl, setRedirectUrl] = useState("");
  const [nextStep, setNextStep] = useState("");
  const [loading, setLoading] = useState(true);

  // Function to check if the user is logged in
  const checkLogin = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://sandboxwealth-frapi.mojoinfinity.com/users/check-login",
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
        setRedirectUrl(response.data.data.redirect_url);
        setNextStep(response.data.data.next_step);
        // Store login status in localStorage for persistence
        if (response.data.data.is_login) {
          localStorage.setItem("isLogin", "true");
        } else {
          localStorage.removeItem("isLogin");
        }
      }
    } catch (error) {
      console.log("Error checking login:", error);
    } finally {
      setLoading(false);
    }
  };

  // Check login status on initial load and when reloading the page
  useEffect(() => {
    const storedLoginStatus = localStorage.getItem("isLogin");
    if (storedLoginStatus === "true") {
      setIsLogin(true);
      setLoading(false); // Set loading to false immediately if already logged in
    } else {
      checkLogin();
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLogin,
        redirectUrl,
        nextStep,
        loading,
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
