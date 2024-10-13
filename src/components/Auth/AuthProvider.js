import React, { createContext, useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { getUser } from "../../constants/getDataFromServer";

// Create the AuthContext
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(
    localStorage.getItem("token") || null
  );
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Function to handle login
  const login = async (token) => {
    localStorage.setItem("token", token);
    setAuthToken(token);

    try {
      // Fetch user data from the backend after logging in
      await getUser(setError, setUser);
    } catch (err) {
      console.error("Error fetching user on login:", err);
      setError("Login failed.");
    }
  };

  // Function to handle logout
  const logout = useCallback(() => {
    localStorage.removeItem("token");
    setAuthToken(null);
    setUser(null);
    navigate("/login");
  }, [navigate]);

  // Check if token is valid on app load and fetch user data from the backend
  useEffect(() => {
    const fetchUserData = async () => {
      if (authToken) {
        try {
          await getUser(setError, setUser);
        } catch (error) {
          console.error("Error during user fetching:", error);
          logout(); // If the token is invalid, log out the user
        }
      }
    };

    fetchUserData();
  }, [authToken, logout]);

  return (
    <AuthContext.Provider value={{ authToken, user, login, logout, error }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
