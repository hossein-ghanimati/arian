import { AppDispatch } from "@/redux/store";
import { changeTodoStatusReq } from "@/services/axios/requests/todos";
import { Todo, TodoStatus } from "@/types/todo.type";
export const choseStatusColor = (status: TodoStatus) => {
  switch (status) {
    case "complete":
      return "bg-green-500 text-stone-200"
    case "isDoing":
      return "bg-blue-500 text-stone-200"
    case "notStarted":
      return "bg-red-500 text-stone-200"
    case "unknown":
      return "bg-white"

    default:
      return "bg-white"
  }
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const dragStartHandler = (event: any, props: any) => {
  const todo = { ...props }
  delete todo.onRemove
  event.dataTransfer.setData('todo', JSON.stringify(todo))
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const dragOverHandler = (event: any) => {
  event.preventDefault()
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const dropHandler = (event: any, dispatch: AppDispatch, status: TodoStatus) => {
  const todo: Todo = JSON.parse(event.dataTransfer.getData('todo'))
  dispatch(
    changeTodoStatusReq(
      {
        prevStatus: todo.status,
        todo: {
          ...todo,
          status
        },
      }
    )
  )
}