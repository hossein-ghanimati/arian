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
  /* eslint-disable @typescript-eslint/no-unused-expressions */
  
  const {todos, sortMethod} = state;
  sortMethod === "last"
    ? todos.push(action.meta.arg)
    : todos.unshift(action.meta.arg)
}
export const removeTodo = (
  state: InitialState,
  action: {
    meta: {
      arg: Todo
    }
  }
) => {
  /* eslint-disable @typescript-eslint/no-unused-expressions */  
  console.log("remoaf");
  
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
  /* eslint-disable @typescript-eslint/no-unused-expressions */  
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
  /* eslint-disable @typescript-eslint/no-unused-expressions */  
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
  let {todos, sortMethod} = state

  sortMethod = newSortMethod;
  todos = newSortMethod === "last" 
    ? sortByLast(todos)
    : sortByFirst(todos)

  return {
    todos,
    sortMethod
  }
}