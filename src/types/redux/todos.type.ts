import { Todo } from "../todo.type";
export type SortMethod = "first" | "last"
export type InitialState = {
  todos: Todo[],
  sortMethod: SortMethod,
}