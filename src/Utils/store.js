import { configureStore } from "@reduxjs/toolkit";
import Appslice from "./Appslice";
import SearchSlice from "./SearchSlice";

const store = configureStore({
  reducer: {
    app: Appslice,
    search:SearchSlice
  },
});

export default store;
