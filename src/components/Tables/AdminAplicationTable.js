import React, { useEffect, useState } from "react";
import { getDataFromServer } from "../../constants/getDataFromServer";
import AdminAplicationRow from "./Rows/AdminAplicationRow";

const AdminAplicationTable = ({ type }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    switch (type) {
      case "accepted":
        getDataFromServer(`aplications/accepted`, setData);
        break;
      case "rejected":
        getDataFromServer(`aplications/rejected`, setData);
        break;
      case "inprogress":
        getDataFromServer(`aplications/inprogress`, setData);
        break;
      default:
        getDataFromServer(`aplications`, setData);
        break;
    }
  }, [type]);
  return (
    <table className="w-full">
      <thead>
        <tr>
          <td>No.</td>
          <td>ID</td>
          <td>Nazwa użytkownika</td>
          <td>Stanowisko</td>
          <td>{type === "accepted" ? "Data akceptacji" : "Data dodania"}</td>
          {type === "inprogress" ? (
            <>
              <td>Dzień Próbny</td>
              <td>FDP</td>
              <td>B.Sanepid</td>
              <td>Legitymacja</td>
            </>
          ) : (
            <></>
          )}
          {type === "rejected" ? <></> : <td>Akcja</td>}
        </tr>
      </thead>
      <tbody>
        {data.map((item, i) => (
          <AdminAplicationRow
            key={`adm-apl-row-${item.id}`}
            number={i}
            id={item.id}
            username={item.username}
            annTitle={item.aplication_title}
            createdAt={item.created_at}
            type={type}
            lastModifyAt={item.lastmodify_at}
            data={item}
          />
        ))}
      </tbody>
    </table>
  );
};

export default AdminAplicationTable;
