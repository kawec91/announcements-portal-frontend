import React from "react";
import { Link } from "react-router-dom";

const LandingAnnouncementCard = ({ title, id }) => {
  return (
    <Link to={`/ogloszenia/${id}`}>
      <div>{title}</div>
    </Link>
  );
};

export default LandingAnnouncementCard;
