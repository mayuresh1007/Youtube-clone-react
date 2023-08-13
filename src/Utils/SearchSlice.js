import { createSlice } from "@reduxjs/toolkit";

const SearchSlice = createSlice({
  name: "search",
  initialState: { recommendation: "trending" },
  reducers: {
    cacheResults: (state, action) => {
      Object.assign(state, action.payload);
    },
    searchBtnBar: (state, action) => {
      state.recommendation.replace("trending", action.payload);
    },
  },
});

export const { cacheResults, searchBtnBar } = SearchSlice.actions;
export default SearchSlice.reducer;
