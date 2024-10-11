import React from "react";
import AdminMenuItem from "./Buttons/AdminMenuItem";

const NavAdmin = () => {
  const menu = [
    {
      path: "/admin",
      title: "Dashboard",
    },
    {
      path: "/admin/users",
      title: "Użytkownicy",
    },
    {
      path: "/admin/announcements",
      title: "Ogłoszenia",
    },
    {
      path: "/admin/aplications",
      title: "Aplikacje",
    },
    {
      path: "/admin/aplications/inprogress",
      title: "Przetwarzane Aplikacje",
    },
    {
      path: "/admin/aplications/accepted",
      title: "Zakończone Aplikacje",
    },
    {
      path: "/admin/aplications/rejected",
      title: "Odrzucone Aplikacje",
    },
    {
      path: "/admin/reports",
      title: "Raporty",
    },
    {
      path: "/admin/files",
      title: "Formularze",
    },
    // {
    //   path: "",
    //   title: "",
    // },
  ];
  return (
    <div className="border-r-[1px] border-black h-full w-1/6 p-4 flex flex-col items-start gap-4">
      {menu.map((item) => (
        <AdminMenuItem path={item.path} title={item.title} key={item.title} />
      ))}
    </div>
  );
};

export default NavAdmin;
