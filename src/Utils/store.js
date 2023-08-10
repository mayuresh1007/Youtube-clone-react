import { configureStore } from "@reduxjs/toolkit";
import Appslice from "./Appslice";

const store = configureStore({
  reducer: {
    app: Appslice,
  },
});

export default store;
