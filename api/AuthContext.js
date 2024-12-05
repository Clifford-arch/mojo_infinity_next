"use client";
import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLogin, setIsLogin] = useState(false);
  const [redirectUrl, setRedirectUrl] = useState("");
  const [nextStep, setNextStep] = useState("");
  const [loading, setLoading] = useState(true);

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
      }
    } catch (error) {
      console.log("Error checking login:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkLogin();
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