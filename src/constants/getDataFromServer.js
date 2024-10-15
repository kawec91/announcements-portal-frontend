import axios from "axios";
import { apiUrl } from "./apiUrl";
import { jwtDecode } from "jwt-decode";

export const getDataFromServer = async (connectionPath, cbData) => {
  try {
    const res = await axios.get(`${apiUrl}/${connectionPath}`, {
      headers: {
        "Content-Type": "application/json",
        // Authorization: "Bearer your-token-here",
      },
    });
    console.log(`${connectionPath}`, res.data);

    cbData(res.data);
  } catch (err) {
    console.error("Error fetching data:", err);
  }
};

export const updateDataOnServer = async (connectionPath, data) => {
  try {
    const res = await axios.put(`${apiUrl}/${connectionPath}`, data, {
      headers: {
        "Content-Type": "application/json",
        // Authorization: "Bearer your-token-here",
      },
    });
    console.log(`UPDATE DATA: ${connectionPath}`, res.data);
  } catch (err) {
    console.error("Error fetching data:", err);
  }
};

export const deleteDataOnServer = async (connectionPath, token) => {
  try {
    const res = await axios.delete(`${apiUrl}/${connectionPath}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(`${connectionPath}`, res.data);
  } catch (err) {
    console.error("Error fetching data:", err);
  }
};

export const loginDataOnServer = async (connectionPath, data) => {
  try {
    const res = await axios.post(`${apiUrl}/${connectionPath}`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(`LOGIN DATA: ${connectionPath}`, res.data);
    return res;
  } catch (err) {
    console.error(
      "Error during login request:",
      err.response ? err.response.data : err
    );
  }
};

export const getUser = async (errorSetter, userSetter) => {
  const token = localStorage.getItem("token"); // Get the token from localStorage
  if (!token) {
    errorSetter("No token found");
    return;
  }

  try {
    // Decode the token to get user ID
    const decodedToken = jwtDecode(token);
    const userId = decodedToken.id; // Assuming 'id' is the field for user ID in your JWT

    // Call backend to get user data without the password
    const response = await axios.get(`${apiUrl}/users/${userId}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // Send the token for authentication
      },
    });

    // Set the user data (excluding password)
    userSetter(response.data);
  } catch (err) {
    console.error("Error fetching user data:", err);
    errorSetter(
      err.response ? err.response.data.message : "Error fetching user data"
    );
  }
};

export const postDataOnServer = async (connectionPath, token, data) => {
  try {
    const res = await axios.post(`${apiUrl}/${connectionPath}`, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(`${connectionPath}`, res.data);
  } catch (err) {
    console.error("Error fetching data:", err);
  }
};
export const postDataOnServerWithFile = async (connectionPath, token, data) => {
  try {
    const res = await axios.post(`${apiUrl}/${connectionPath}`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(`${connectionPath}`, res.data);
  } catch (err) {
    console.error("Error fetching data:", err);
  }
};
