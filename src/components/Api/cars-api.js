import axios from "axios";

const instance = axios.create({
  baseURL: "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers",
});

export const getCarsApi = async () => {
    const response = await instance.get("/?page=1&limit=4", {params: {}});
    console.log(response)
    return response.data.items;
}

export const getFiltredCarsApi = async (params) => {
  const response = await instance.get("/?page=1&limit=4", { params: params });
  console.log(response);
  return response.data.items;
}