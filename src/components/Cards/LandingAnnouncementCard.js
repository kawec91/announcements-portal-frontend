import React from "react";
import { Link } from "react-router-dom";
import { apiImageUrl } from "../../constants/apiUrl";

const LandingAnnouncementCard = ({ title, id, img, salary }) => {
  const imgUrl = `${apiImageUrl}${img}`;
  console.log(`${apiImageUrl}${img}`);
  return (
    <Link to={`/ogloszenia/${id}`} className="group">
      <div className="rounded-md relative shadow-black shadow-lg h-64 w-64">
        <img
          src={imgUrl}
          alt="card-image"
          className="h-64 w-64 rounded-md object-cover"
        />

        <div className="absolute top-1/2 -translate-y-1/2 bg-black/85 w-full py-2 text-white group-hover:text-red-500 text-center">
          {title}
          <hr className="my-2" />
          Więcej...
        </div>
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-white p-2 rounded-xl w-5/6">
          <div className="rounded-xl bg-black text-white group-hover:text-red-500 py-4 px-2 text-center">
            {salary} zł brutto/h
          </div>
        </div>
      </div>
    </Link>
  );
};

export default LandingAnnouncementCard;
