import React, { useEffect, useState } from "react";
import OkIcon from "../../assets/icons/okIcon.png";
import ErrorIcon from "../../assets/icons/errorIcon.png";

const AdminHireButton = ({ clickAction, hireState }) => {
  const [buttonState, setButtonState] = useState(hireState);

  useEffect(() => {
    const ueFunc = () => {
      setButtonState(hireState);
      console.log("btn", buttonState);
    };
    ueFunc();
  }, [hireState, buttonState]);
  return (
    <button
      className={`flex items-center text-sm gap-2 ${
        buttonState ? "text-green-600" : "text-red-500"
      }`}
      onClick={() => {
        clickAction();
      }}
      disabled={!buttonState}
    >
      <img
        src={buttonState ? OkIcon : ErrorIcon}
        alt="delete-icon"
        className={`h-6 `}
      />{" "}
      Zatrudnij
    </button>
  );
};

export default AdminHireButton;
