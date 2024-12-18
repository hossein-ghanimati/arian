import { useModal } from "@/hooks/useModal";
import { Todo as TodoType } from "@/types/todo.type";
import Todo from "../Todo";

const FirstColumn = (props: {
  todos: TodoType[];
  onRemove: (todo: TodoType) => void;
}) => {
  const { openModal } = useModal();
  return (
    <div className="cont w-1/4 min-w-24 bg-zinc-200 relative pt-14 px-4 pb-2">
      <h1
        className="absolute top-0 left-0 bg-zinc-700 font-bold  text-stone-50 w-full py-4 px-4"
      >No Status</h1>
      <button id="add_btn" data-target-modal="#todo_form" onClick={openModal}
        className="py-2 px-4 bg-zinc-500 text-stone-50 outline-none border-none w-full text-lg my-6 rounded cursor-pointer"
      >
        + Add Todo
      </button>
      <div
        className="status status w-full h-full p-0"
        id="no_status"
        onDragOver={() => "dragOverHandler(event)"}
        onDrop={() => "dropHandler(event)"}
      >
        {props.todos.map((todo) => (
          <Todo onRemove={() => props.onRemove(todo)} {...todo} />
        ))}
      </div>
    </div>
  );
};

export default FirstColumn;