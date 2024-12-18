import { createAsyncThunk } from "@reduxjs/toolkit";
import sendApiReq from "../configs/apiReq";
import { Todo, TodoStatus } from "@/types/todo.type";

export const getTodosReq = createAsyncThunk(
  "todos/getTodos",
  async () => {
    const response = await sendApiReq().get("/todos", )
    return response.data as Todo[]     
  }
)

export const addTodoReq = createAsyncThunk(
  "todos/addTodo",
  async (todo: Todo, { rejectWithValue }) => {
    try {
      const response = await sendApiReq().post("/todos", todo)
      console.log(response);

      if (response.status >= 300)
        throw new Error(response.statusText)
      
    } catch (error) {
      console.log(error);
      
      const errorMessage = (error as Error).message
      return rejectWithValue(errorMessage)
    }
  }
)

export const remvoeTodoReq = createAsyncThunk(
  "todos/removeTodo",
  async (todo: Todo, { rejectWithValue }) => {
    try {
      const response = await sendApiReq().delete(`/todos/${todo.id}`)

      if (response.status >= 300)
        throw new Error(response.statusText)
    } catch (error) {
      const errorMessage = (error as Error).message
      return rejectWithValue(errorMessage)
    }
  }
)

export const changeTodoStatusReq = createAsyncThunk(
  "todos/changeTodoStatus",
  async (
    argument: {
      todo: Todo,
      prevStatus: TodoStatus
    },
    {
      rejectWithValue
    }
  ) => {
    try {
      const response = await sendApiReq().put(`/todos/${argument.todo.id}`, argument.todo)

      if (response.status >= 300)
        throw new Error(response.statusText)
    } catch (error) {
      const errorMessage = (error as Error).message
      return rejectWithValue(errorMessage)
    }
  }
)