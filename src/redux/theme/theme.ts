
import { createSlice } from "@reduxjs/toolkit";
import { setTheme, toggleTheme } from "./funcs";


const initialState = {
  isDark: false,
}

const slice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setThemeAction: setTheme,
    toggleThemeAction: toggleTheme
  }
})

export const {
  setThemeAction,
  toggleThemeAction
} = slice.actions

export default slice.reducer