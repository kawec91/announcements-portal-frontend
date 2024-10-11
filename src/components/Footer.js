import React from "react";
import { Outlet } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <Outlet />
      <div className="h-[50px] bg-slate-400 px-4 flex items-center justify-between">
        <div>&copy; WhiteBull 2024. All rights reserved.</div>
        <div>FBIcon InstagramIcon TikTokIcon</div>
      </div>
    </>
  );
};

export default Footer;
