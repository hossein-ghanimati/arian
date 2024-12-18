import { configureStore } from "@reduxjs/toolkit";
import todoList from "./todos/todos"
import modal from "./modal/modal"
import overlay from "./overlay/overlay"
import theme from "./theme/theme"

const store = configureStore({
  reducer: {
    todoList,
    modal,
    overlay,
    theme
  }
})

export type RootStates = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store