import React, { useEffect, useState } from "react";
import axios from "axios";
import ReportIcon from "../../../assets/icons/reports.png";
import UserIcon from "../../../assets/icons/users.png";
import AdminUserIcon from "../../../assets/icons/admin.png";
import WorkerUserIcon from "../../../assets/icons/worker.png";
import PotentialUserIcon from "../../../assets/icons/potentialuser.png";
import PaperIcon from "../../../assets/icons/paper.png";
import AnnIcon from "../../../assets/icons/ann.png";
import AnnAIcon from "../../../assets/icons/ann_accepted.png";
import AnnRIcon from "../../../assets/icons/ann_rejected.png";
import AnnPIcon from "../../../assets/icons/ann_inprogress.png";
import { apiUrl } from "../../../constants/apiUrl";

const StatCard = ({ title, type }) => {
  const [color, setColor] = useState("");
  const [icon, setIcon] = useState("");
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
      setData(res.data.dataLength);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  useEffect(() => {
    switch (type) {
      case "user":
        setIcon(UserIcon);
        setColor("bg-pink-300");
        getData(`users/length`);
        break;
      case "user-admin":
        setIcon(AdminUserIcon);
        setColor("bg-pink-500");
        getData(`users/admin/length`);
        break;
      case "user-member":
        setIcon(WorkerUserIcon);
        setColor("bg-pink-700");
        getData(`users/member/length`);
        break;
      case "user-user":
        setIcon(PotentialUserIcon);
        setColor("bg-pink-900");
        getData(`users/user/length`);
        break;
      case "announcement":
        setIcon(PaperIcon);
        setColor("bg-yellow-500");
        getData(`announcements/length`);
        break;
      case "aplication":
        setIcon(AnnIcon);
        setColor("bg-blue-100");
        getData(`aplications/length`);
        break;
      case "aplication-new":
        setIcon(AnnIcon);
        setColor("bg-blue-300");
        getData(`aplications/new/length`);
        break;
      case "aplication-progress":
        setIcon(AnnPIcon);
        setColor("bg-blue-500");
        getData(`aplications/inprogress/length`);
        setData("-");
        break;
      case "aplication-rejected":
        setIcon(AnnRIcon);
        setColor("bg-blue-700");
        getData(`aplications/rejected/length`);
        setData("-");
        break;
      case "aplication-accepted":
        setIcon(AnnAIcon);
        setColor("bg-blue-900");
        getData(`aplications/accepted/length`);
        setData("-");
        break;
      case "raports":
        setIcon(ReportIcon);
        setColor("bg-violet-500");
        //getData(`reports/length`);
        setData("-");
        break;
      default:
        setIcon("");
        setColor("bg-white");
        break;
    }
  }, [type]);
  return (
    <div className="flex items-center h-20 w-36 rounded-md">
      <div
        className={`w-2 h-full border-y-[1px] ${
          type === "user" ? "border-green-500" : "border-black"
        } ${color}`}
      ></div>
      <div className="flex flex-col items-center justify-between border-t-[1px] border-r-[1px] border-black h-full w-full">
        <div className="p-2 flex items-center gap-2">
          <img src={icon} alt="icon" className="h-6 object-contain" />
          <div className="text-2xl">{data}</div>
        </div>
        <div
          className={`text-gray-400 border-b-[1px] border-black w-full flex flex-col items-center`}
        >
          <hr className="w-full" />
          <div className="px-2">{title}</div>
        </div>
      </div>
    </div>
  );
};

export default StatCard;
