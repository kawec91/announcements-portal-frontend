import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "./Auth/AuthProvider";

const NavNoUser = () => {
  const { user, logout } = useContext(AuthContext); // Access user and logout from context

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
          <button onClick={logout}>Logout</button>
        </>
      )}

      {/* When user is logged in with role "member" */}
      {user && user.role === "member" && (
        <>
          <Link to="/reports">Raporty</Link>
          <button onClick={logout}>Logout</button>
        </>
      )}

      {/* When user is logged in with role "admin" */}
      {user && user.role === "admin" && (
        <>
          <Link to="/admin">Panel Administracyjny</Link>
          <Link to="/reports">Raporty</Link>
          <button onClick={logout}>Logout</button>
        </>
      )}
    </nav>
  );
};

export default NavNoUser;
