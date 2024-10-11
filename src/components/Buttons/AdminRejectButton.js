import React from "react";
import DeleteIcon from "../../assets/icons/delete.png";

const AdminDeleteButton = ({ clickAction }) => {
  return (
    <button
      className="flex items-center text-sm gap-2"
      onClick={() => {
        clickAction();
      }}
    >
      <img src={DeleteIcon} alt="delete-icon" className="h-6" /> Odrzuć
    </button>
  );
};

export default AdminDeleteButton;
