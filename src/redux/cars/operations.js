import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCarsApi, getCarByIDApi } from "../../components/Api/cars-api";

export const fetchCars = createAsyncThunk(
  "cars/fetchCars",
  async (params, thunkAPI) => {
    try {
      return await getCarsApi(params);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchCarByID = createAsyncThunk(
  "cars/fetchCarByID",
  async (id, thunkAPI) => {
    try {
      return await getCarByIDApi(id);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchFiltredCars = createAsyncThunk(
  "cars/fetchFiltredCars",
  async (params, thunkAPI) => {
    try {
      return await getCarsApi(params);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
