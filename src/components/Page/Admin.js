import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import NavAdmin from "../NavAdmin";
import { getUser } from "../../constants/getDataFromServer";

const Admin = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  console.log(error);
  useEffect(() => {
    getUser(setError, setUser);
  }, []);
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
