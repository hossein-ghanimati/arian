import { TodoStatus } from "@/types/todo.type"

export const statuses: {
  slug: TodoStatus;
  title: string
}[] = [
  {
    slug: "notStarted",
    title: "Not Started"
  },
  {
    slug: "isDoing",
    title: "Doing Know"
  },
  {
    slug: "complete",
    title: "Compeleted"
  },
]