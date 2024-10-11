import React from "react";
import AdminAplicationTable from "../../Tables/AdminAplicationTable";

const AdminRejectedAplications = () => {
  return (
    <div>
      <AdminAplicationTable type={"rejected"} />
    </div>
  );
};

export default AdminRejectedAplications;
