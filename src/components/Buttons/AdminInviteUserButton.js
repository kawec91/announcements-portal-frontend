import React from "react";
import InviteIcon from "../../assets/icons/invUser.png";

const AdminInviteUserButton = ({ clickAction }) => {
  return (
    <button
      className="flex items-center text-sm gap-2"
      onClick={() => {
        clickAction();
      }}
    >
      <img src={InviteIcon} alt="delete-icon" className="h-6" /> Etap II
    </button>
  );
};

export default AdminInviteUserButton;
