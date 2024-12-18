import { choseStatusColor, dragStartHandler } from "@/ts/utils/elems";
import { Todo as TodoType } from "@/types/todo.type";

type TodoProps = TodoType & {
  onRemove: () => void;
};

const Todo = (props: TodoProps) => {
  return (
    <p draggable="true" id={props.id}
      className={`
        ${choseStatusColor(props.status)}
        mt-1
        py-3
        px-5
        rounded-md
        flex
        items-center
        justify-between
        cursor-pointer
      `}
      onDragStart={(event) =>{
        dragStartHandler(event, props)
      }}
    >
      <span>{props.title}</span>
      <span className="text-lg" onClick={props.onRemove}>x</span>
    </p>
  );
};

export default Todo;
