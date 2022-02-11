import { createSlice } from "@reduxjs/toolkit";
type pokemons = {
  pokemon: {
    name: string;
    image: string;
    artwork: string;
  };
};
const initialState: pokemons = {
  pokemon: {
    name: "",
    image: "",
    artwork: "",
  },
};
export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    getlist(state, action) {
      state.pokemon = action.payload;
    },
  },
});
export const { getlist } = pokemonSlice.actions;
export default pokemonSlice.reducer;
