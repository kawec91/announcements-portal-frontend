import React, { useState } from "react";
import OutlineButton from "../../Buttons/OutlineButton";
import AdminAnnouncementTable from "../../Tables/AdminAnnouncementTable";
import NewAnnouncementsForm from "../../Forms/NewAnnouncementsForm";

const AdminAnnouncements = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOutlinePress = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <>
      {isModalOpen && (
        <div className="bg-black/85 w-full h-full fixed top-0 left-0 z-30 flex flex-col items-center justify-center">
          <div className="relative w-full flex items-center justify-center">
            <button
              className="fixed top-4 right-4 text-white"
              onClick={() => {
                handleOutlinePress();
              }}
            >
              [ <span className="text-red-600">X</span> ] Zamknij
            </button>
            <div className="bg-white w-4/5 p-4">
              <NewAnnouncementsForm />
            </div>
          </div>
        </div>
      )}
      <div>
        <div className="p-4 text-right border-b-[1px] border-black">
          <OutlineButton
            title={"Nowe ogłoszenie"}
            handlePress={handleOutlinePress}
          />
        </div>
        <div className="p-4">
          <AdminAnnouncementTable />
        </div>
      </div>
    </>
  );
};

export default AdminAnnouncements;
