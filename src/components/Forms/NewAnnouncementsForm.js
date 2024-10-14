import React, { useContext, useState } from "react";
import AuthContext from "../Auth/AuthProvider";
import axios from "axios";
import { apiUrl } from "../../constants/apiUrl";

const NewAnnouncementsForm = () => {
  const { user, authToken } = useContext(AuthContext);
  const [file, setFile] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    salary: "",
    location: "",
    description: "",
    created_by: user.id,
    lastmodify_by: user.id,
  });

  const handleChanges = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formPayload = new FormData();
    Object.keys(formData).forEach((key) => {
      formPayload.append(key, formData[key]);
    });
    if (file) {
      formPayload.append("image_path", file);
    }

    try {
      const response = await axios.post(
        `${apiUrl}/announcements/new`,
        formPayload,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error uploading data:", error);
    } finally {
      window.location.reload();
    }
  };

  const inputStyle = `border border-black p-2 w-3/4`;

  return (
    <form
      className="flex flex-col items-center justify-center gap-4"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Tytuł"
        name="title"
        onChange={(e) => handleChanges(e)}
        className={inputStyle}
        required
      />
      <input
        type="text"
        placeholder="Wynagrodzenie (np. 23 - 45)"
        name="salary"
        onChange={(e) => handleChanges(e)}
        className={inputStyle}
        required
      />
      <input
        type="file"
        name="image_path"
        onChange={handleFileChange}
        className={inputStyle}
        required
      />
      <select
        defaultValue={"none"}
        className={`px-2 ${inputStyle}`}
        name="location"
        onChange={(e) => handleChanges(e)}
        required
      >
        <option value={""}>Wybierz...</option>
        <option value={"ul. Mostowa 36, 87-100 Toruń"}>Toruń</option>
        <option value={"ul. Poznańska 8, 85-129 Bydgoszcz"}>Bydgoszcz</option>
      </select>
      <textarea
        type="text"
        name="description"
        onChange={(e) => handleChanges(e)}
        className={`${inputStyle} h-64`}
        required
      ></textarea>
      <button className="py-2 px-6 bg-black text-white">Zapisz</button>
    </form>
  );
};

export default NewAnnouncementsForm;
