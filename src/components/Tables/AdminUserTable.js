import axios from "axios";
import React, { useEffect, useState } from "react";
import AdminUserRow from "./Rows/AdminUserRow";
import { apiUrl } from "../../constants/apiUrl";

const AdminUserTable = () => {
  const [data, setData] = useState([]);
  // Get Data for items
  const getData = async (connectionPath) => {
    try {
      const res = await axios.get(`${apiUrl}/${connectionPath}`, {
        headers: {
          "Content-Type": "application/json",
          // Authorization: "Bearer your-token-here",
        },
      });
      console.log(res.data);
      setData(res.data);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };
  useEffect(() => {
    getData(`users/`);
  }, []);
  return (
    <table className="w-full">
      <thead>
        <tr className="text-xl border-b-[1px] border-black">
          <td>ID</td>
          <td>Użytkownik</td>
          <td>E-mail</td>
          <td>Rola</td>
          <td>Akcje</td>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => {
          return (
            <AdminUserRow
              key={`user-table-row-${item.id}`}
              id={item.id}
              username={item.username}
              email={item.email}
              role={item.role}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default AdminUserTable;
