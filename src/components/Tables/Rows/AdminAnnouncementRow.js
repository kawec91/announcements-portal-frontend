import React, { useContext } from "react";
import AdminEditButton from "../../Buttons/AdminEditButton";
import AdminDeleteButton from "../../Buttons/AdminDeleteButton";
import AdminPreviewButton from "../../Buttons/AdminPreviewButton";
import { Link } from "react-router-dom";
import { deleteDataOnServer } from "../../../constants/getDataFromServer";
import AuthContext from "../../Auth/AuthProvider";

const AdminAnnouncementRow = ({ id, title, salary, createdAt }) => {
  const { authToken } = useContext(AuthContext);
  const handleEditClick = () => {};

  const handleDeleteClick = async () => {
    try {
      deleteDataOnServer(`announcements/${id}`, authToken);
    } catch (error) {
      console.log(error);
    } finally {
      window.location.reload();
    }
  };

  const hadnlePreviewClick = () => {
    //Works, open link in new tab
  };
  return (
    <>
      <tr>
        <td>{id}</td>
        <td>{title}</td>
        <td>{salary}</td>
        <td>{createdAt}</td>
        <td className="flex items-center gap-4">
          <Link to={`/ogloszenia/${id}`} target="blank">
            <AdminPreviewButton clickAction={hadnlePreviewClick} />
          </Link>
          <AdminEditButton clickAction={handleEditClick} switchText={true} />
          <AdminDeleteButton clickAction={handleDeleteClick} />
        </td>
      </tr>
    </>
  );
};

export default AdminAnnouncementRow;
