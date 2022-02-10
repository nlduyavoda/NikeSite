import { createSlice } from "@reduxjs/toolkit";
type pokemon = {
  value: number;
};
const initialState: pokemon = {
  value: 0,
};
export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
      getList:()=>{
         
      }
  },
});
