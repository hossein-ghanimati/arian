import { setModalAction } from '@/redux/modal/modal'
import { AppDispatch, RootStates } from '@/redux/store'
import  { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const TodoModal = () => {
  const modalSetting = useSelector((store: RootStates) => store.modal)
  const dispath: AppDispatch = useDispatch()
  const closeModal = useCallback(() => 
    dispath(setModalAction(false))
  , [])
  
  return (
    <div 
      className={`flex min-h-screen w-full absolute ${modalSetting.isOpen ? "top-0" : "-top-full"}`}
      onClick={closeModal}
    >
      <div className="modal" id="todo_form">
        <div className="header">
          <div className="title">Add Todo</div>
          <button className="btn close-modal"
            onClick={closeModal}
          >&times;</button>
        </div>
        <div className="body">
          <input type="text" id="todo_input" />
          <input type="submit" value="Add Todo" id="todo_submit" />
        </div>
      </div>
    </div>
  )
}

export default TodoModal