import { createSlice } from "@reduxjs/toolkit";
import { fetchCars, fetchFiltredCars } from "./operations";

const handlePending = (state) => {
  state.loading = true;
  state.error = null;
};

const handleRejected = (state, { payload }) => {
  state.error = payload;
  state.loading = false;
};

const slice = createSlice({
  name: "cars",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, handlePending)
      .addCase(fetchCars.fulfilled, (state, { payload }) => {
        state.error = null;
        state.loading = false;
        state.items = payload;
      })
      .addCase(fetchCars.rejected, handleRejected)
      .addCase(fetchFiltredCars.pending, handlePending)
      .addCase(fetchFiltredCars.fulfilled, (state, { payload }) => {
        state.error = null;
        state.loading = false;
        state.items = [];
        state.items = payload;
      })
      .addCase(fetchFiltredCars.rejected, handleRejected);
  },
});

export default slice.reducer;
