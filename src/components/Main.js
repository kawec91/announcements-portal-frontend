import React from "react";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const Main = () => {
  return (
    <main className="h-[calc(100vh_-_150px)] overflow-auto">
      <Outlet />
      <Toaster />
    </main>
  );
};

export default Main;
