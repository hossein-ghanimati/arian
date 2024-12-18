import { addTodoReq, changeTodoStatusReq, getTodosReq, remvoeTodoReq } from "@/services/axios/requests/todos";
import { InitialState } from "@/types/redux/todos.type";
import { createSlice } from "@reduxjs/toolkit";
import { addTodo, removeTodo, setMethod, setNewStatus, setPrevStatus } from "./funcs";

const initialState: InitialState = {
  todos: [],
  sortMethod: "last"
}

const slice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    setMethodAction: setMethod,
  },
  extraReducers : builder => {
    builder.addCase(
      getTodosReq.fulfilled,
      (state, action) => {state.todos = action.payload}
    )


    builder.addCase(
      addTodoReq.pending,
      addTodo
    )
    builder.addCase(
      addTodoReq.rejected,
      removeTodo
    )

    builder.addCase(
      remvoeTodoReq.pending,
      removeTodo
    )
    builder.addCase(
      remvoeTodoReq.rejected,
      addTodo
    )

    builder.addCase(
      changeTodoStatusReq.pending,
      setNewStatus
    )
    builder.addCase(
      changeTodoStatusReq.rejected,
      setPrevStatus
    )
  }
})

export const {
  setMethodAction
} = slice.actions

export default slice.reducer