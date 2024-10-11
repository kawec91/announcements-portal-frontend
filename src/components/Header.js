import React from "react";
import { Link, Outlet } from "react-router-dom";
import NavUser from "./NavUser";

const Header = () => {
  return (
    <>
      <div className="h-[100px] bg-slate-400 flex items-center justify-between px-4">
        <Link to={"/"}>
          <img src="" alt="logo" />
        </Link>
        <NavUser />
      </div>
      <Outlet />
    </>
  );
};

export default Header;
