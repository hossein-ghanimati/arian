import { setModalAction } from '@/redux/modal/modal'
import { setOverlayAction } from '@/redux/overlay/overlay'
import { AppDispatch, RootStates } from '@/redux/store'
import  { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const TodoModal = () => {
  const modalSetting = useSelector((store: RootStates) => store.modal)
  const dispath: AppDispatch = useDispatch()
  
  const closeModal = useCallback(() => {
    dispath(setModalAction(false))
    dispath(setOverlayAction(false))
  }, [])
  
  return (
    <div 
      className={`flex items-center justify-center min-h-screen transition-all w-full fixed z-40 ${modalSetting.isOpen ? "top-0" : "-top-full"}`}
      onClick={closeModal}
    >
      <div 
        onClick={e => e.stopPropagation()}
        className="modal mx-1 max-w-[450px] border border-gray-600 rounded-lg  bg-custom-white overflow-hidden -translate-y-20"
        id="todo_form"
      >
        <div 
          className="header flex justify-between items-center border-b border-gray-600 p-2 bg-gray-200"
        >
          <div className="title">Add Todo</div>
          <button className="close-modal bg-none border-none text-2xl text-bold text-bold"
            onClick={closeModal}
          >&times;</button>
        </div>
        <div className="body p-3">
          <input type="text" id="todo_input"
            className='py-2 px-4 w-full m-1 cursor-pointer border border-black dark:border-white rounded-md'
           />
          <input type="submit" value="Add Todo" id="todo_submit" 
            className='bg-green-500 text-white border-none text-lg py-2 px-4 w-full mt-3 cursor-pointer rounded-md'
          />
        </div>
      </div>
    </div>
  )
}

export default TodoModal