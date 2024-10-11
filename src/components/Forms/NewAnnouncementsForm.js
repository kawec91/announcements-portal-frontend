import React, { useState } from "react";

const NewAnnouncementsForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    salary: "",
    location: "",
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
        name="image"
        //onChange={(e) => handleChanges(e)}
        className={inputStyle}
      />
      <select defaultValue={"none"} className={`px-2 ${inputStyle}`}>
        <option value={"ul. Mostowa 36, 87-100 Toruń"}>Toruń</option>
        <option value={"ul. Poznańska 8, 85-129 Bydgoszcz"}>Bydgoszcz</option>
      </select>
      <textarea
        type="file"
        name="image"
        //onChange={(e) => handleChanges(e)}
        className={`${inputStyle} h-64`}
      ></textarea>
      <button className="py-2 px-6 bg-black text-white">Zapisz</button>
    </form>
  );
};

export default NewAnnouncementsForm;
