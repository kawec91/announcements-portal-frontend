import axios from "axios";
import React, { useContext, useState } from "react";
//import { getUser } from "../../../constants/getDataFromServer";
import { apiUrl } from "../../../constants/apiUrl";
import AuthContext from "../../Auth/AuthProvider";

const AdminFiles = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  const { authToken, user } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      setMessage("Please choose a file.");
      return;
    }

    if (!user) {
      setMessage("User not authenticated.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("document", file);

    try {
      const response = await axios.post(
        `${apiUrl}/formulars/upload`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${authToken}`,
          },
        }
      );

      setMessage("File uploaded successfully!");
      console.log(response.data);
    } catch (error) {
      console.error("Error uploading file:", error);
      setMessage("Failed to upload file.");
    }
  };

  return (
    <div>
      <h2>Upload a File</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Choose File:</label>
          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
            required
          />
        </div>
        <button type="submit">Upload</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default AdminFiles;
