import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "light", // Default theme
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
    updateTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export const { toggleTheme, updateTheme } = themeSlice.actions;

export default themeSlice.reducer;
