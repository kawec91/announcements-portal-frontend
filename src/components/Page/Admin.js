import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import NavAdmin from "../NavAdmin";
import AuthContext from "../Auth/AuthProvider";

const Admin = () => {
  const { user } = useContext(AuthContext);
  return (
    <>
      {user?.role === "admin" ? (
        <div className="flex items-center h-full w-full">
          <NavAdmin />
          <Outlet />
        </div>
      ) : (
        <div className="flex items-center justify-center h-full">
          Nie posiadsza uprawnień.
        </div>
      )}
    </>
  );
};

export default Admin;
