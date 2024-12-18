import { InitialState, ThemeAction } from "@/types/redux/theme.type";

export const setTheme = (
  state: InitialState,
  action: ThemeAction
) => {
  state.isDark = action.payload === "dark" ? true : false;
}

export const toggleTheme = (
  state: InitialState,
) => {
  state.isDark = !state.isDark
}