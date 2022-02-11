import { createSlice } from "@reduxjs/toolkit";
type pokemon = [{ name: string; image: string; artwork: string }];
const initialState: pokemon = [{ name: "", image: "", artwork: "" }];

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    getlist(state, action) {
      state = action.payload;
      return state;
    },
  },
});
export const { getlist } = pokemonSlice.actions;
export default pokemonSlice.reducer;
