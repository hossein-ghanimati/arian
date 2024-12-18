import React from 'react'

const TodoModal = () => {
  return (
    <div className="modal" id="todo_form">
      <div className="header">
        <div className="title">Add Todo</div>
        <button className="btn close-modal">&times;</button>
      </div>
      <div className="body">
        <input type="text" id="todo_input" />
        <input type="submit" value="Add Todo" id="todo_submit" />
      </div>
    </div>
  )
}

export default TodoModal