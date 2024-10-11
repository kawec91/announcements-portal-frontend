import React, { useState } from "react";
import BlackButton from "../Buttons/BlackButton";
import axios from "axios";
import { apiUrl } from "../../constants/apiUrl";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChanges = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("click");
    if (
      formData.username !== "" &&
      formData.email !== "" &&
      formData.password !== ""
    ) {
      try {
        const res = await axios.post(
          `${
            process.env.F_APP_ENV === "dev"
              ? process.env.API_URI
              : process.env.API_PROD_URI
          }/users/new`,
          formData,
          {
            headers: {
              "Content-Type": "application/json",
              // Authorization: "Bearer your-token-here",
            },
          }
        );
        console.log("Register response", res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    } else {
      console.log("Pola formularza nie mogą być puste");
    }
  };
  const inputStyle = `p-2 w-full rounded-md h-[50px]`;
  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="bg-slate-400 p-8 rounded-md w-1/4"
    >
      <div className="flex flex-col items-center justify-center gap-4">
        <input
          name="username"
          type="text"
          className={`${inputStyle}`}
          placeholder="Nazwa użytkownika (np. Jan Kowalski)"
          onChange={(e) => {
            handleChanges(e);
          }}
        />
        <input
          name="email"
          type="text"
          className={`${inputStyle}`}
          placeholder="twoj@email.pl"
          onChange={(e) => {
            handleChanges(e);
          }}
        />
        <input
          name="password"
          type="password"
          className={`${inputStyle}`}
          placeholder="Hasło"
          onChange={(e) => {
            handleChanges(e);
          }}
        />
        <BlackButton text="Rejestracja" />
      </div>
    </form>
  );
};

export default RegisterForm;
