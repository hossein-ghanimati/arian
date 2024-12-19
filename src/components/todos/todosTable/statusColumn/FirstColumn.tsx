import { useModal } from "@/hooks/useModal";
import { Todo as TodoType } from "@/types/todo.type";
import Todo from "../../../Todo";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { AppDispatch, RootStates } from "@/redux/store";
import { dragOverHandler, dropHandler } from "@/ts/utils/elems";

const FirstColumn = (props: {
  todos: TodoType[];
  onRemove: (todo: TodoType) => void;
}) => {
  const modalSetting = useSelector((store: RootStates) => store.modal);
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const { openModal } = useModal();
  const dispach: AppDispatch = useDispatch()

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    modalSetting.isOpen || btnRef.current?.focus();
  }, [modalSetting.isOpen]);
  return (
    <div className="cont w-1/4 min-w-24 bg-zinc-200 relative pt-14 px-4 pb-2">
      <h1 className="absolute top-0 left-0 bg-zinc-700 font-bold  text-stone-50 w-full py-4 px-4">
        No Status
      </h1>
      <button
        id="add_btn"
        data-target-modal="#todo_form"
        onClick={openModal}
        ref={btnRef}
        className="py-2 px-4 bg-zinc-400 text-stone-50 outline-none border-none w-full text-lg my-6 rounded cursor-pointer focus:bg-gray-500"
      >
        + Add Todo
      </button>
      <div
        className="status status w-full h-first-column-height overflow-auto p-0"
        id="no_status"
        onDragOver={(e) => dragOverHandler(e)}
        onDrop={(e) => dropHandler(e, dispach, "unknown")}
      >
        {props.todos.map((todo) => (
          <Todo key={todo.id} onRemove={() => props.onRemove(todo)} {...todo} />
        ))}
      </div>
    </div>
  );
};

export default FirstColumn;
