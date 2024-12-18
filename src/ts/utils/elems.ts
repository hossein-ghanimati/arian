import { TodoStatus } from "@/types/todo.type";

export const choseStatusColor = (status: TodoStatus) => {
  switch (status) {
    case "complete":
      return "bg-green-500"
    case "isDoing":
      return "bg-bglue-400"
    case "notStarted":
      return "bg-red-400"
    case "unknown":
      return "bg-white dark:bg-gray-900"
  
    default:
      return "bg-white dark:bg-gray-900"
  }
}