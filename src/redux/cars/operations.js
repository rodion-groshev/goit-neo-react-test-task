import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCarsApi, getFiltredCarsApi } from "../../components/Api/cars-api";

export const fetchCars = createAsyncThunk(
  "cars/fetchCars",
  async (_, thunkAPI) => {
    try {
      return await getCarsApi();
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchFiltredCars = createAsyncThunk(
  "cars/fetchFiltredCars",
  async (params, thunkAPI) => {
    try {
      return await getFiltredCarsApi(params);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
