import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDataFromServer } from "../../constants/getDataFromServer";
import AnnouncementShortDescription from "../AnnouncementShortDescription";

const AnnouncementsDetails = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getDataFromServer(`announcements/${id}`, setData);
  }, [id]);
  return (
    <div className="p-4 flex items-center justify-center">
      <div className="bg-slate-400 rounded-md flex flex-col items-start justify-start min-h-[calc(100vh_-_180px)] w-4/5 p-4">
        <h4 className="text-2xl">{data.title}</h4>
        <hr className="bg-white h-1 w-full my-2" />
        <AnnouncementShortDescription
          localization={data.location}
          salary={data.salary}
        />
        <hr className="bg-white h-1 w-full my-2" />
        <div
          dangerouslySetInnerHTML={{
            __html: data?.description || "",
          }}
        ></div>

        <hr className="bg-white h-1 w-full my-2" />
        <div>Attach file form</div>
      </div>
    </div>
  );
};

export default AnnouncementsDetails;
