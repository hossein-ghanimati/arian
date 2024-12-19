/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { sortByFirst, sortByLast } from "@/ts/utils/calculation";
import { InitialState, SortMethod } from "@/types/redux/todos.type";
import { Todo, TodoStatus } from "@/types/todo.type";

// --- Below Functions Have Refrence Effect On State ---

export const addTodo = (
  state: InitialState,
  action: {
    meta: {
      arg: Todo
    }
  }
) => {  
  const {todos, sortMethod} = state;
  sortMethod === "last"
    ? todos.unshift(action.meta.arg)
    : todos.push(action.meta.arg)
}
export const removeTodo = (
  state: InitialState,
  action: {
    meta: {
      arg: Todo
    }
  }
) => {   
  
  const todoIndex = state.todos.findIndex(todo => todo.id === action.meta.arg.id)
  state.todos.splice(todoIndex, 1) 
}
export const setNewStatus = (
  state: InitialState,
  action: {
    meta: {
      arg: {
        todo: Todo,
      }
    }
  }
) => { 
  const newTodo = action.meta.arg.todo
  const todoIndex = state.todos.findIndex(todo => todo.id === newTodo.id)
  state.todos[todoIndex].status = newTodo.status
}

export const setPrevStatus = (
  state: InitialState,
  action: {
    meta: {
      arg: {
        todo: Todo,
        prevStatus: TodoStatus
      }
    }
  }
) => { 
  const argument = action.meta.arg
  const todoIndex = state.todos.findIndex(todo => todo.id === argument.todo.id)
  state.todos[todoIndex].status = argument.prevStatus
}

export const setMethod = (
  state: InitialState,
  action: {
    payload: SortMethod
  }
) => {
  const newSortMethod = action.payload
  // let {todos, sortMethod} = state;

  state.sortMethod = newSortMethod;
  const newTodos = newSortMethod === "last" 
    ? sortByLast(state.todos)
    : sortByFirst(state.todos)
  
  state.todos = newTodos
}