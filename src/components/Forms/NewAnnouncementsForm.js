import React, { useContext, useState } from "react";
import AuthContext from "../Auth/AuthProvider";

const NewAnnouncementsForm = () => {
  const { user } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    title: "",
    salary: "",
    location: "",
    description: "",
    image_path: "",
    created_by: user.id,
    lastmodify_by: user.id,
  });
  const handleChanges = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const inputStyle = `border border-black p-2 w-3/4`;
  return (
    <form className="flex flex-col items-center justify-center gap-4">
      <input
        type="text"
        placeholder="Tytuł"
        name="title"
        onChange={(e) => handleChanges(e)}
        className={inputStyle}
      />
      <input
        type="text"
        placeholder="Wynagrodzenie (np. 23 - 45)"
        name="salary"
        onChange={(e) => handleChanges(e)}
        className={inputStyle}
      />
      <input
        type="file"
        name="image_path"
        //onChange={(e) => handleChanges(e)}
        className={inputStyle}
      />
      <select
        defaultValue={"none"}
        className={`px-2 ${inputStyle}`}
        name="location"
        onChange={(e) => handleChanges(e)}
      >
        <option value={"ul. Mostowa 36, 87-100 Toruń"}>Toruń</option>
        <option value={"ul. Poznańska 8, 85-129 Bydgoszcz"}>Bydgoszcz</option>
      </select>
      <textarea
        type="text"
        name="description"
        onChange={(e) => handleChanges(e)}
        className={`${inputStyle} h-64`}
      ></textarea>
      <button className="py-2 px-6 bg-black text-white">Zapisz</button>
    </form>
  );
};

export default NewAnnouncementsForm;
