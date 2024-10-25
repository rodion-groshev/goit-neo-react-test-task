import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "filters",
  initialState: {
    filters: { location: "" },
  },
  reducers: {
    setFilters: (state, { payload }) => {
      return { ...state, filters: payload };
    },
  },
});

export const { setFilters } = slice.actions;
export default slice.reducer;
