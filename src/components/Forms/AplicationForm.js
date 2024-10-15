import React, { useContext, useState } from "react";
import BlackButton from "../Buttons/BlackButton";
import { postDataOnServerWithFile } from "../../constants/getDataFromServer";
import AuthContext from "../Auth/AuthProvider";

const AplicationForm = ({ aplicationName }) => {
  const { user, authToken } = useContext(AuthContext);
  const [file, setFile] = useState(null);
  const [formData, setFormData] = useState({
    username: user?.username || "",
    aplication_status: "new",
    created_by: user?.username || "",
    lastmodify_by: user?.username || "",
    aplication_title: aplicationName,
  });
  console.log("AFFF", user);
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
      formPayload.append("file_path", file);
    }

    try {
      await postDataOnServerWithFile(`aplications/new`, authToken, formPayload);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
      <div className="flex items-center gap-2">
        <p>Załącz CV:</p>
        <input
          type="file"
          name="file_path"
          onChange={handleFileChange}
          required
        />
      </div>

      <div className="flex items-center gap-2">
        <input type="checkbox" required />
        <p>
          Wyrażam zgode na przetwarzanie moich danych osobowych na potrzeby
          rekrutacji.
        </p>
      </div>
      <div className="text-center">
        <BlackButton text={"Wyślij"} />
      </div>
    </form>
  );
};

export default AplicationForm;
