import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter";
import privacySLice from "./privacy";

const counterStore = configureStore({
  reducer: { counter: counterSlice.reducer, privacy: privacySLice.reducer },
});

export default counterStore;
