import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { apiUrl } from "../constants/apiUrl";
import axios from "axios";

const NavNoUser = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem("token"); // Get the token from localStorage
      if (!token) {
        setError("No token found");
        return;
      }

      try {
        // Decode the token to get user ID
        const decodedToken = jwtDecode(token);
        const userId = decodedToken.id; // Assuming 'id' is the field for user ID in your JWT

        // Call backend to get user data without the password
        const response = await axios.get(`${apiUrl}/users/${userId}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // Send the token for authentication
          },
        });

        // Set the user data (excluding password)
        setUser(response.data);
      } catch (err) {
        console.error("Error fetching user data:", err);
        setError(
          err.response ? err.response.data.message : "Error fetching user data"
        );
      }
    };

    fetchUserData();
  }, []);

  const handleLogout = () => {};

  console.log(user);
  console.log(error);
  return (
    <nav className="flex items-center justify-center gap-4">
      <Link to="/">Strona główna</Link>

      {/* When there is no user */}
      {!user && (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Rejestracja</Link>
        </>
      )}

      {/* When user is logged in with role "user" */}
      {user && user.role === "user" && (
        <>
          <button onClick={handleLogout}>Logout</button>
        </>
      )}

      {/* When user is logged in with role "member" */}
      {user && user.role === "member" && (
        <>
          <Link to="/reports">Raporty</Link>
          <button onClick={handleLogout}>Logout</button>
        </>
      )}

      {/* When user is logged in with role "admin" */}
      {user && user.role === "admin" && (
        <>
          <Link to="/admin">Panel Administracyjny</Link>
          <Link to="/reports">Raporty</Link>
          <button onClick={handleLogout}>Logout</button>
        </>
      )}
    </nav>
  );
};

export default NavNoUser;
