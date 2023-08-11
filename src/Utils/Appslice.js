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
    searchBtnBar:(state,action)=>{
      state.recommendation.replace("trending", action.payload)
    },
    
  },
});

export const { toggleMenu, closeMenu ,searchBtnBar} = appSlice.actions;
export default appSlice.reducer;
