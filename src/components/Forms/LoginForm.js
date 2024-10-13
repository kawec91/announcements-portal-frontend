import React, { useState, useContext } from "react";
import BlackButton from "../Buttons/BlackButton";
import { loginDataOnServer } from "../../constants/getDataFromServer";
import { useNavigate } from "react-router-dom";
import AuthContext from "../Auth/AuthProvider"; // Import AuthContext

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const { login } = useContext(AuthContext); // Get login function from AuthContext

  const nav = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const loginData = {
      email,
      password,
    };

    try {
      // Call login API
      const response = await loginDataOnServer("users/login", loginData);

      // Assuming response has a token if login is successful
      if (response && response.data && response.data.token) {
        const token = response.data.token;
        await login(token); // Use the login function from AuthContext
        nav("/"); // Redirect to home after successful login
      } else {
        setError("Login failed");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setError("Error during login");
    }
  };

  const inputStyle = `p-2 w-full rounded-md h-[50px]`;

  return (
    <form className="bg-slate-400 p-8 rounded-md w-1/4" onSubmit={handleSubmit}>
      <div className="flex flex-col items-center justify-center gap-4">
        {error && <p className="text-red-500">{error}</p>}
        <input
          className={`${inputStyle}`}
          placeholder="twoj@email.pl"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Update email state
          type="email"
          required
        />
        <input
          className={`${inputStyle}`}
          placeholder="Hasło"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // Update password state
          type="password"
          required
        />
        <BlackButton text="Logowanie" />
      </div>
    </form>
  );
};

export default LoginForm;
