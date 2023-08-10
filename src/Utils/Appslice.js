import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
    recommendation:"trending"
  },
  reducers: {
    toggleMenu: (state, action) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state, action) => {
      state.isMenuOpen = false;
    },
    searchBtn:(state,action)=>{
      state.recommendation.replace("trending", action.payload)
    },
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
  },
});

export const { toggleMenu, closeMenu ,searchBtn} = appSlice.actions;
export default appSlice.reducer;
