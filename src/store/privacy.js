import { createSlice } from "@reduxjs/toolkit";

const privacySLice = createSlice({
  name: "privacy",
  initialState: false,
  reducers: {
    toggle: (state) => {
      return (state = !state);
    },
  },
});
export default privacySLice;
export const privacyActions = privacySLice.actions;
