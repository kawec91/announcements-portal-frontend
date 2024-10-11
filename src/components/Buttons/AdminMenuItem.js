import React from "react";
import { Link } from "react-router-dom";

const AdminMenuItem = ({ path, title }) => {
  return (
    <Link
      to={`${path}`}
      className="p-2 border-[1px] border-black w-full rounded-md"
    >
      {title}
    </Link>
  );
};

export default AdminMenuItem;
