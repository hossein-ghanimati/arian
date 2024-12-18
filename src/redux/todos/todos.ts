import { addTodoReq, remvoeTodoReq } from "@/services/axios/requests/todos";
import { InitialState } from "@/types/redux/todos.type";
import { createSlice } from "@reduxjs/toolkit";
import { addTodo, removeTodo } from "./funcs";

const initialState: InitialState = {
  todos: [],
  sortMethod: "last"
}

const slice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    
  },
  extraReducers : builder => {
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
  }
})

export default slice.reducer