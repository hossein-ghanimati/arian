import { Todo } from "../todo.type";

export type InitialState = {
  todos: Todo[],
  sortMethod: "first" | "last",
}