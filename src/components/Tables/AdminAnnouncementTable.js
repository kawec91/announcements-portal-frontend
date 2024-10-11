import React, { useEffect, useState } from "react";
import { getDataFromServer } from "../../constants/getDataFromServer";
import AdminAnnouncementRow from "./Rows/AdminAnnouncementRow";

const AdminAnnouncementTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getDataFromServer("announcements", setData);
  }, []);
  return (
    <table className="w-full text-lg">
      <thead className="w-full">
        <tr className="border-b-[1px] border-black">
          <td>ID</td>
          <td>Tytuł</td>
          <td>Wynagrodzenie</td>
          <td>Data umieszczenia</td>
          <td>Akcje</td>
        </tr>
      </thead>
      <tbody className="w-full">
        {data.length === 0 ? (
          <tr className="w-full">
            <td className="w-full flex justify-center" colSpan={5}>
              Brak aktywnych ogłoszeń.
            </td>
          </tr>
        ) : (
          <></>
        )}
        {data.map((item) => {
          return (
            <AdminAnnouncementRow
              id={item.id}
              title={item.title}
              salary={item.salary}
              createdAt={item.created_at}
              key={`adm-ann-table-${item.id}`}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default AdminAnnouncementTable;
