import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDataFromServer } from "../../constants/getDataFromServer";
import AnnouncementShortDescription from "../AnnouncementShortDescription";
import AplicationForm from "../Forms/AplicationForm";

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
          className="py-2 px-6"
          dangerouslySetInnerHTML={{
            __html: data.description || "",
          }}
        ></div>

        <hr className="bg-white h-1 w-full my-2" />
        <div className="py-2 px-2 flex items-center justify-center w-full">
          <AplicationForm aplicationName={data.title}/>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementsDetails;
