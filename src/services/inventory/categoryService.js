import axios from "axios";

export const fetchCategories = async () => {
  try {
    const response = await axios.get(
      "https://pms-backend-host.onrender.com/api/v1/categories"
    );
    return response.data.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};

export const createCategory = async (categoryData) => {
  try {
    const response = await axios.post(
      "https://pms-backend-host.onrender.com/api/v1/categories",
      categoryData
    );
    return {
      success: true,
      data: response.data,
    };
  } catch (error) {
    return {
      success: false,
      message: error.response?.data?.message || error.message,
    };
  }
};

export const fetchCategoryById = async (categoryID) => {
  const response = await axios.get(
    `https://pms-backend-host.onrender.com/api/v1/categories/${categoryID}`
  );
  return response.data;
};

export const updateCategory = async (categoryID, updatedData) => {
  const response = await axios.put(
    `https://pms-backend-host.onrender.com/api/v1/categories/${categoryID}`,
    updatedData
  );
  return response.data;
};
