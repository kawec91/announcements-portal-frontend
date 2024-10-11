import React from "react";
import DownloadIcon from "../../assets/icons/download.png";

const AdminDownloadButton = ({ clickAction }) => {
  return (
    <button
      className="flex items-center text-sm gap-2 "
      onClick={() => {
        clickAction();
      }}
    >
      <img src={DownloadIcon} alt="delete-icon" className="h-5" /> Pobierz
    </button>
  );
};

export default AdminDownloadButton;
