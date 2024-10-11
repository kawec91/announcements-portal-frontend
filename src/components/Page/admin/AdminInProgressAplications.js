import React from "react";
import AdminAplicationTable from "../../Tables/AdminAplicationTable";

const AdminInProgressAplications = () => {
  return (
    <div>
      <AdminAplicationTable type={"inprogress"} />
    </div>
  );
};

export default AdminInProgressAplications;
