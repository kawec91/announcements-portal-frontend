import React from "react";
import PreviewIcon from "../../assets/icons/search.png";

const AdminPreviewButton = ({ clickAction }) => {
  return (
    <button
      className="flex items-center text-sm gap-2"
      onClick={() => {
        clickAction();
      }}
    >
      <img src={PreviewIcon} alt="delete-icon" className="h-6" /> Podgląd
    </button>
  );
};

export default AdminPreviewButton;
