import React, { useState } from "react";
import AdminEditButton from "../../Buttons/AdminEditButton";
import AdminDeleteButton from "../../Buttons/AdminDeleteButton";
import {
  deleteDataOnServer,
  updateDataOnServer,
} from "../../../constants/getDataFromServer";
import ConfirmationBox from "../../ConfirmationBox";

const AdminUserRow = ({ id, username, email, role }) => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [isConfirmationBoxOpen, setIsConfirmationBoxOpen] = useState(false);
  const [formData, setFormData] = useState({
    userRole: role,
  });

  const handleEditClick = () => {
    console.log("editClick");
    if (isDisabled === false) {
      handleEditSave();
    }
    setIsDisabled(!isDisabled);
  };

  const handleEditSave = () => {
    console.log("editClickSaveHandle");
    updateDataOnServer(`users/${id}`, formData);
  };

  const handleChanges = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDeleteClick = () => {
    setIsConfirmationBoxOpen(!isConfirmationBoxOpen);
  };
  const handleDeleteConfirmation = async () => {
    setIsConfirmationBoxOpen(!isConfirmationBoxOpen);
    try {
      await deleteDataOnServer(`users/${id}`);
    } catch (error) {
      console.log(error);
    } finally {
      window.location.reload();
    }
  };
  return (
    <>
      {isConfirmationBoxOpen && (
        <ConfirmationBox
          handleClosing={setIsConfirmationBoxOpen}
          handleConfirm={handleDeleteConfirmation}
        />
      )}
      <tr className={`text-xl ${id % 2 === 0 ? "bg-gray-200" : "bg-white"}`}>
        <td className="w-10 ">{id}</td>
        <td>{username}</td>
        <td>{email}</td>
        <td>
          <select
            name="userRole"
            disabled={isDisabled}
            type="text"
            defaultValue={role}
            onChange={(e) => {
              handleChanges(e);
            }}
          >
            <option value={"user"}>Użytkownik</option>
            <option value={"member"}>Pracownik</option>
            <option value={"admin"}>Admin</option>
          </select>
        </td>
        <td className="flex items-center gap-8 justify-start w-48 h-8">
          <AdminEditButton
            clickAction={handleEditClick}
            switchText={isDisabled}
          />
          <AdminDeleteButton clickAction={handleDeleteClick} />
        </td>
      </tr>
    </>
  );
};

export default AdminUserRow;
