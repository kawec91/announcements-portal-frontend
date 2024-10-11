import React from "react";
import locationIcon from "../assets/icons/location.png";
import walletIcon from "../assets/icons/wallet.png";

const AnnouncementShortDescription = ({ localization, salary }) => {
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center justify-center gap-4">
        <img src={locationIcon} alt="location-icon" />
        <div className="flex flex-col items-start justify-center gap-2">
          <h3 className="font-bold">Lokalizacja</h3>
          <div>{localization}</div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-4">
        <img src={walletIcon} alt="wallet-icon" />
        <div className="flex flex-col items-start justify-center gap-2">
          <h3 className="font-bold">Wynagrodzenie</h3>
          <div>{salary} zł brutto/godz.</div>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementShortDescription;
