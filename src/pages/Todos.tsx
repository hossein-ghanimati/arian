import TodoModal from "@/components/modals/TodoModal"
import TodosTable from "@/components/todos/todosTable/TodosTable"
import useTitle from "@/hooks/useTitle"

const Todos = () => {
  useTitle("Todos")

  return (
    <div id="todos"
      className="container min-h-screen flex items-center justify-center"
    >
      <TodoModal/>
      <TodosTable/>
    </div>
  )
}

export default Todos