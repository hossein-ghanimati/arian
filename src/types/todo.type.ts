export type TodoStatus = "unknown" | "notStarted" | "isDoing" | "complete"

export type Todo = {
  id: string;
  title: string;
  status: TodoStatus
  createdAt: string;
}