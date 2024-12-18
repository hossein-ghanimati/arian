export type InitialState = {
  isDark: boolean;
}

export type ThemeAction = {
  payload: "light" | "dark"
}