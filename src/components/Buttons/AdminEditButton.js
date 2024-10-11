import React from "react";
import EditIcon from "../../assets/icons/edit.png";

const AdminEditButton = ({ clickAction, switchText }) => {
  return (
    <button
      className="flex items-center text-sm gap-2"
      onClick={() => {
        clickAction();
      }}
    >
      <img src={EditIcon} alt="edit-icon" className="h-6" />{" "}
      {switchText ? "Edytuj" : "Zapisz"}
    </button>
  );
};

export default AdminEditButton;
