import React, { useEffect, useState } from "react";
import AdminRejectButton from "../../Buttons/AdminRejectButton";
import { updateDataOnServer } from "../../../constants/getDataFromServer";
import AdminEditButton from "../../Buttons/AdminEditButton";
import AdminDownloadButton from "../../Buttons/AdminDownloadButton";
import AdminInviteUserButton from "../../Buttons/AdminInviteUserButton";
import AdminHireButton from "../../Buttons/AdminHireButton";
import { apiImageUrl } from "../../../constants/apiUrl";

const AdminAplicationRow = ({
  number,
  id,
  username,
  annTitle,
  createdAt,
  type,
  lastModifyAt,
  data,
}) => {
  const [isEditModeOn, setIsEditModeOn] = useState(false);
  const [isReadyToHire, setIsReadyToHire] = useState(false);
  const [formData, setFormData] = useState({
    aplicatoin_status: "",
    testday_date: data.testday_date || "",
    fdp: data.fdp || false,
    bs: data.bs || false,
    student_id: data.student_id || "none",
  });

  const handleRejectClick = async () => {
    formData.aplicatoin_status = "rejected";
    try {
      updateDataOnServer(`aplications/${id}/status`, formData);
    } catch (error) {
      console.log(error);
    } finally {
      window.location.reload();
    }
  };

  const handleEditClick = () => {
    setIsEditModeOn(!isEditModeOn);
    if (isEditModeOn === true) {
      console.log("true");
      try {
        updateDataOnServer(`aplications/${id}`, formData);
      } catch (error) {
        console.log(error);
      } finally {
        window.location.reload();
      }
    }
  };

  const handleChanges = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleInviteUserClick = () => {
    formData.aplicatoin_status = "inprogress";
    try {
      updateDataOnServer(`aplications/${id}/status`, formData);
    } catch (error) {
      console.log(error);
    } finally {
      window.location.reload();
    }
  };

  const handleHireClick = () => {
    formData.aplicatoin_status = "accepted";
    try {
      updateDataOnServer(`aplications/${id}/status`, formData);
    } catch (error) {
      console.log(error);
    } finally {
      window.location.reload();
    }
  };

  const clickInfo = () => {
    console.log("clk");
  };

  useEffect(() => {
    const checkIsReadyToHireStatus = () => {
      if (
        formData.fdp === true &&
        formData.bs === true &&
        formData.student_id !== "none" &&
        formData.student_id !== "nie dostarczono" &&
        isEditModeOn === false
      ) {
        setIsReadyToHire(true);
      }
    };
    checkIsReadyToHireStatus();
  }, [formData.fdp, formData.bs, formData.student_id, isEditModeOn]);
  return (
    <tr>
      <td>{number + 1}</td>
      <td>{id}</td>
      <td>{username}</td>
      <td>{annTitle}</td>
      <td>{type === "new" ? createdAt : lastModifyAt}</td>
      {type === "inprogress" ? (
        <>
          <td>
            <input
              type="date"
              disabled={!isEditModeOn}
              onChange={(e) => handleChanges(e)}
              name="testday_date"
              value={formData.testday_date}
            />
          </td>
          <td>
            <input
              type="checkbox"
              disabled={!isEditModeOn}
              onChange={(e) => handleChanges(e)}
              name="fdp"
              checked={formData.fdp}
            />
          </td>
          <td>
            <input
              type="checkbox"
              disabled={!isEditModeOn}
              onChange={(e) => handleChanges(e)}
              name="bs"
              checked={formData.bs}
            />
          </td>
          <td>
            <select
              className="px-2"
              disabled={!isEditModeOn}
              defaultValue={formData.student_id}
              name="student_id"
              onChange={(e) => handleChanges(e)}
            >
              <option>Wybierz...</option>
              <option value={"nie dotyczy"}>Nie dotyczy</option>
              <option value={"dostarczono"}>Dostarczono</option>
              <option value={"nie dostarczono"}>Nie dostarczono</option>
            </select>
          </td>
        </>
      ) : (
        <></>
      )}
      {type === "rejected" ? (
        <></>
      ) : type === "inprogress" ? (
        <td className="flex items-center gap-4">
          <AdminHireButton
            clickAction={handleHireClick}
            hireState={isReadyToHire}
          />
          <AdminEditButton
            clickAction={handleEditClick}
            switchText={!isEditModeOn}
          />
          <AdminRejectButton clickAction={handleRejectClick} />
        </td>
      ) : type === "accepted" ? (
        <td>[ Zwolnij ] TODO </td>
      ) : (
        <td className="flex items-center gap-4">
          <a href={`${apiImageUrl}${data.file_path}`} download target="blank">
            <AdminDownloadButton clickAction={clickInfo} />
          </a>

          <AdminInviteUserButton clickAction={handleInviteUserClick} />
          <AdminRejectButton clickAction={handleRejectClick} />
        </td>
      )}
    </tr>
  );
};

export default AdminAplicationRow;
