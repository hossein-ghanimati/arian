import React from "react";

const TodosTable = () => {
  return (
    <div className="todo-container">
      <div className="cont">
        <h1>No Status</h1>
        <button
          id="add_btn"
          data-target-modal="#todo_form"
          onclick="showModal()"
        >
          + Add Todo
        </button>
        <div
          className="status"
          id="no_status"
          ondragover="dragOverHandler(event)"
          ondrop="dropHandler(event)"
        >
          {/* <!-- <div className="todo" draggable="true" >
              Buy a Pizza
              <span className="close">&times;</span>
            </div> --> */}
        </div>
      </div>
      <div className="cont">
        <h1>Not Started</h1>
        <div
          className="status"
          id="not_started"
          ondragover="dragOverHandler(event)"
          ondrop="dropHandler(event)"
        ></div>
      </div>
      <div className="cont">
        <h1>inprogress</h1>
        <div
          className="status"
          id="inprogress"
          ondragover="dragOverHandler(event)"
          ondrop="dropHandler(event)"
        ></div>
      </div>
      <div className="cont">
        <h1>completed</h1>
        <div
          className="status"
          id="completed"
          ondragover="dragOverHandler(event)"
          ondrop="dropHandler(event)"
        ></div>
      </div>
    </div>
  );
};

export default TodosTable;
