import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "favorites",
  initialState: {
    favorites: [],
  },
  reducers: {
    setFavorites: (state, { payload }) => {
      state.favorites.push(payload);
    },
  },
});

export const { setFavorites } = slice.actions;
export default slice.reducer;
