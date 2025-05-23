import axios from "axios";

const API_URL = import.meta.env.VITE_APP_API_URL;

console.log(API_URL);

export const loginUser = async (formData, setError, Navigate) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, {
      name: formData?.email,
      password: formData?.password,
    });
    if (response.status === 200) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
  } catch (error) {
    setError("Invalid email or password");
    throw new Error("Login failed");
  }
};

export const registerUser = async (formData, setError, Naviagte) => {
  try {
    const response = await axios.post(`${API_URL}/auth/register`, {
      name: formData?.name,
      email: formData?.email,
      phone: formData?.phone,
      password: formData?.password,
    });
    if (response.status === 201) {
      Naviagte("/login");
    }
    return response.data;
  } catch (error) {
    console.error("Register API error:", error.response?.data || error.message);
    setError(error.response?.data?.message);
    if (error.response?.data?.message === "User already exists") {
      Naviagte("/login");
    }
    throw new Error("Registration failed");
  }
};
