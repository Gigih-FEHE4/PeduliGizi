import { createSlice } from "@reduxjs/toolkit";

export const childSlice = createSlice({
  name: "user",
  initialState: {
    id: ""
  },
  reducers: {
    setId: (state, action) => {
      state.id = action.payload;
    }
  }
});

export const { setId } = childSlice.actions;

export default childSlice.reducer;
