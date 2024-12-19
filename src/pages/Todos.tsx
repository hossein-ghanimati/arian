import TodoModal from "@/components/modals/TodoModal"
import SortSelector from "@/components/todos/sortSelector/SortSelector"
import TodosTable from "@/components/todos/todosTable/TodosTable"
import useTitle from "@/hooks/useTitle"
import { AppDispatch } from "@/redux/store"
import { getTodosReq } from "@/services/axios/requests/todos"
import { useEffect } from "react"
import { useDispatch } from "react-redux"

const Todos = () => {
  useTitle("Todos")
  const dispach: AppDispatch = useDispatch()
  useEffect(() => {
    dispach(
      getTodosReq()
    )
  }, [])

  return (
    <div id="todos"
      className="container min-h-screen flex items-center justify-center flex-col gap-4"
    >
      <TodoModal/>
      <SortSelector/>
      <TodosTable/>
    </div>
  )
}

export default Todos