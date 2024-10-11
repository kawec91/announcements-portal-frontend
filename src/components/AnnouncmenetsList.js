import React, { useEffect, useState } from "react";
import { getDataFromServer } from "../constants/getDataFromServer";
import LandingAnnouncementCard from "./Cards/LandingAnnouncementCard";

const AnnouncmenetsList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getDataFromServer("announcements", setData);
  }, []);
  return (
    <>
      {data.map((item) => {
        return (
          <LandingAnnouncementCard
            title={item.title}
            id={item.id}
            key={`landing-item-card-${item.id}`}
          />
        );
      })}
    </>
  );
};

export default AnnouncmenetsList;
