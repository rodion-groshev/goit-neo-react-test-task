import axios from "axios";

const instance = axios.create({
  baseURL: "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers",
});

export const getCarsApi = async (params) => {
  const response = await instance.get("/", {
    params: params,
  });
  return response.data;
};

export const getCarByIDApi = async (id) => {
  const response = await instance.get(`/${id}`);
  return response.data;
};
