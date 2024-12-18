import Column from "@/components/statusColumn/Column";
import FirstColumn from "@/components/statusColumn/FirstColumn";
import { statuses } from "@/data/statuses";
import { AppDispatch, RootStates } from "@/redux/store";
import { remvoeTodoReq } from "@/services/axios/requests/todos";
import { Todo } from "@/types/todo.type";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

const TodosTable = () => {
  const todoList = useSelector((store: RootStates) => store.todoList);
  const dispath: AppDispatch = useDispatch()

  const removeTodo = useCallback((todo: Todo) => {
    dispath(
      remvoeTodoReq(
        todo
      )
    )
  },[])

  return (
    <div className="todo-container w-[1000px] overflow-hidden h-[80vh] flex rounded-2xl">
      <FirstColumn
        onRemove={removeTodo}
        todos={todoList.todos.filter(todo => todo.status === "unknown")}
      />
      {
        statuses.map(status => 
          <Column
            dispatch={dispath}
            onRemove={removeTodo}
            todos={todoList.todos.filter(todo => todo.status === status.slug)}
            {...status}
          />
        )
      }
    </div>
  );
};

export default TodosTable;
