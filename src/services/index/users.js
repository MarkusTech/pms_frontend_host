import axios from "axios";

export const signup = async ({ name, email, password }) => {
  try {
    const { data } = await axios.post(
      "https://pms-backend-host.onrender.com/api/users/register",
      {
        name,
        email,
        password,
      }
    );
    return data;
  } catch (error) {
    // console.log(error.response.data);
    if (error.response && error.response.data)
      throw new Error(error.response.data);
    throw new Error(error.response.data);
  }
};

export const login = async ({ email, password }) => {
  try {
    // const { data } = await axios.post("http://localhost:5000/api/users/login", {
    const { data } = await axios.post(
      "https://pms-backend-host.onrender.com/api/v1/login",
      {
        email,
        password,
      }
    );
    return data;
  } catch (error) {
    // console.log(error.response.data);
    if (error.response && error.response.data)
      throw new Error(error.response.data);
    throw new Error(error.response.data);
  }
};

export const getUserProfile = async ({ token }) => {
  try {
    const config = {
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      mode: "cors",
    };
    const { data } = await axios.get(
      "https://pms-backend-host.onrender.com/api/users/profile",
      config
    );
    return data;
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    throw new Error(error.message);
  }
};

export const updateProfile = async ({ token, userData }) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.put(
      "https://pms-backend-host.onrender.com/api/users/updateProfile",
      userData,
      config
    );
    return data;
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    throw new Error(error.message);
  }
};

export const updateProfilePicture = async ({ token, formData }) => {
  try {
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.put(
      "https://pms-backend-host.onrender.com/api/users/updateProfilePicture",
      formData,
      config
    );
    return data;
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    throw new Error(error.message);
  }
};
