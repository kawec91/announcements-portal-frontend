import React from "react";
import StatCard from "../../Cards/AdminLandingCards/StatCard";

const AdminLanding = () => {
  return (
    <div className="w-full h-full  p-4">
      <div>
        <h4 className="text-xl border-y-[1px] border-black">Użytkownicy</h4>
        <div className="flex items-center justify-between w-full my-4">
          <StatCard type={"user"} title={"Użytkownicy"} key={"sc-1"} />
          <StatCard
            type={"user-admin"}
            title={"Administratorzy"}
            key={"sc-2"}
          />
          <StatCard type={"user-member"} title={"Pracownicy"} key={"sc-3"} />
          <StatCard type={"user-user"} title={"Pozostali"} key={"sc-4"} />
        </div>
      </div>
      <div>
        <h4 className="text-xl border-y-[1px] border-black">Ogłoszenia</h4>
        <div className="flex items-center justify-between w-full my-4">
          <StatCard type={"announcement"} title={"Ogłoszenia"} key={"sc-5"} />
        </div>
      </div>
      <div>
        <h4 className="text-xl border-y-[1px] border-black">Aplikacje</h4>
        <div className="flex items-center justify-between w-full my-4">
          <StatCard type={"aplication"} title={"Aplikacje"} key={"sc-6"} />
          <StatCard type={"aplication-new"} title={"Nowe"} key={"sc-7"} />
          <StatCard
            type={"aplication-progress"}
            title={"Przetwarzane"}
            key={"sc-8"}
          />
          <StatCard
            type={"aplication-rejected"}
            title={"Odrzucone"}
            key={"sc-9"}
          />
          <StatCard
            type={"aplication-accepted"}
            title={"Zakończone"}
            key={"sc-10"}
          />
        </div>
      </div>
      <div>
        <h4 className="text-xl border-y-[1px] border-black">Raporty</h4>
        <div className="flex items-center justify-between w-full my-4">
          <StatCard type={"raports"} title={"Raporty"} key={"sc-11"} />
          <StatCard
            type={"raports-kitchen"}
            title={"Raporty Kuchnia"}
            key={"sc-12"}
          />
          <StatCard
            type={"raports-restaurant"}
            title={"Raporty Sala"}
            key={"sc-13"}
          />
        </div>
      </div>
    </div>
  );
};

export default AdminLanding;
