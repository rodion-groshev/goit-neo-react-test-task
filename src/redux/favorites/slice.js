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
    deleteFavorite: (state, { payload }) => {
      return {
        favorites: state.favorites.filter((fav) => fav != payload),
      };
    },
  },
});

export const { setFavorites, deleteFavorite } = slice.actions;
export default slice.reducer;
