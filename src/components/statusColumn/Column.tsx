import { TodoStatus, Todo as TodoType } from "@/types/todo.type"
import Todo from "../Todo";
import { dragOverHandler, dropHandler } from "@/ts/utils/elems";
import { AppDispatch } from "@/redux/store";

const Column = (props: {
  todos: TodoType[],
  title: string,
  slug: TodoStatus,
  dispatch: AppDispatch
  onRemove: (todo: TodoType) => void
}) => {
  return (
    <div className="cont w-1/4 min-w-24 bg-zinc-200 relative pt-14 px-4 pb-2">
      <h1
        className="absolute top-0 font-bold border-l border-stone-50 left-0 bg-zinc-700 text-stone-50 w-full py-4 px-4"
      >{props.title}</h1>
      <div
        className="status w-full h-fll p-0 overflow-auto"
        id="no_status"
        onDragOver={(e) => dragOverHandler(e)}
        onDrop={(e) => dropHandler(e, props.dispatch, props.slug)}
      >
        {props.todos.map((todo) => (
          <Todo key={todo.id} onRemove={() => props.onRemove(todo)} {...todo} />
        ))}
      </div>
    </div>
  );
}

export default Column