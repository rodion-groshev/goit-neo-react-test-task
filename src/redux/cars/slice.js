import { createSlice } from "@reduxjs/toolkit";
import { fetchCarByID, fetchCars, fetchFiltredCars } from "./operations";

const handlePending = (state) => {
  state.loading = true;
  state.error = null;
};

const handleRejected = (state, { payload }) => {
  state.error = payload;
  state.loading = false;
  state.totalPages = null;
};

const slice = createSlice({
  name: "cars",
  initialState: {
    items: [],
    totalPages: null,
    item: null,
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, handlePending)
      .addCase(fetchCars.fulfilled, (state, { payload }) => {
        state.error = null;
        state.loading = false;
        state.items.push(...payload.items);
        state.totalPages = payload.total;
      })
      .addCase(fetchCars.rejected, handleRejected)

      .addCase(fetchFiltredCars.pending, (state) => {
      state.loading = true;
        state.error = null;
        state.items = [];

      })
      .addCase(fetchFiltredCars.fulfilled, (state, { payload }) => {
        state.error = null;
        state.loading = false;
        state.items = [];
        state.items = payload.items;
        state.totalPages = payload.total;
      })
      .addCase(fetchFiltredCars.rejected, handleRejected)

      .addCase(fetchCarByID.pending, handlePending)
      .addCase(fetchCarByID.fulfilled, (state, { payload }) => {
        state.error = null;
        state.loading = false;
        state.item = payload;
      })
      .addCase(fetchCarByID.rejected, handleRejected);
  },
});

export default slice.reducer;
