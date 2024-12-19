import { AppDispatch, RootStates } from "@/redux/store";
import { setMethodAction } from "@/redux/todos/todos";
import { SortMethod } from "@/types/redux/todos.type";
import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const SortSelector = () => {
  const [isSelectorOpen, setIsSelectorOpen] = useState(false)
  const todoList = useSelector((store: RootStates) => store.todoList)
  const dispach: AppDispatch = useDispatch()


  // console.log(todoList.sortMethod);

  window.addEventListener("click", () => setIsSelectorOpen(false))

  const choseOption = useCallback((option: SortMethod) => {    
    dispach(
      setMethodAction(option)
    )   
  }, [])


  return (
    <div className="max-w-sm mx-auto">
      <div className="flex flex-col relative">
        <button
          id="states-button"
          data-dropdown-toggle="dropdown-states"
          className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center transition-colors text-gray-100 bg-primary-700 rounded-lg hover:bg-primary-500 focus:outline-none "
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setIsSelectorOpen(true)
          }}
        >
          Sort By {
            todoList.sortMethod
          } ...
        </button>
        <div
          id="dropdown-states"
          className={`z-10 absolute -bottom-[240%]  bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 ${isSelectorOpen || "hidden"}`}
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
          >
            <li>
              <button
                type="button"
                className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={() => choseOption("last")}
              >
                <div className="inline-flex items-center"                  
                >Sort By Last</div>
              </button>
            </li>
            <li>
              <button
                type="button"
                className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={() => choseOption("first")}
              >
                <div className="inline-flex items-center"                  
                >Sort By First</div>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SortSelector;
