import { useModal } from '@/hooks/useModal'
import { AppDispatch, RootStates } from '@/redux/store'
import { addTodoReq } from '@/services/axios/requests/todos'
import { addTodoSchema } from '@/services/validation/todos'
import { getJalaliFromDate } from '@/ts/utils/calculation'
import { Field, Form, Formik } from 'formik'
import  { useCallback, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const TodoModal = () => {
  const modalSetting = useSelector((store: RootStates) => store.modal)
  const dispath: AppDispatch = useDispatch()
  const {closeModal} = useModal()
  const inputRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    modalSetting.isOpen && inputRef.current?.focus()    
  }, [modalSetting.isOpen])

  const addTodo = useCallback((title: string) => {
    dispath(
      addTodoReq(
        {
          id: crypto.randomUUID(),
          title,
          status: "unknown",
          createdAt: getJalaliFromDate()
        }
      )
    )

    closeModal()
  }, [])
  
  return (
    <div 
      className={`flex items-center justify-center min-h-screen transition-all duration-500 w-full fixed z-40 ${modalSetting.isOpen ? "top-0" : "-top-full"}`}
      onClick={closeModal}
    >
      <div 
        onClick={e => e.stopPropagation()}
        className="modal mx-1 max-w-[450px] border border-gray-600 rounded-lg  bg-custom-white overflow-hidden -translate-y-20"
        id="todo_form"
      >
        <Formik
          initialValues={{title: ""}}
          validationSchema={addTodoSchema}
          onSubmit={(values, config) => {            
            addTodo(values.title.trim())
            config.resetForm();
          }}
        >
          {({errors}) => (
            <Form>
              <div 
                className="header flex justify-between items-center border-b border-gray-600 p-2 bg-gray-200"
              >
                <div className="title">Add Todo</div>
                <button className="close-modal bg-none border-none text-2xl text-bold text-bold"
                  onClick={closeModal}
                >&times;</button>
              </div>
              <div className="body p-3">
                <Field innerRef={inputRef} autoFocus name="title" type="text" id="todo_input"
                  className='py-2 px-4 w-full m-1 cursor-pointer border border-black dark:border-white rounded-md'
                />
                <button type="submit" id="todo_submit" 
                  disabled={!!errors.title?.length}
                  className='bg-green-500 text-white border-none text-lg py-2 px-4 w-full mt-3 cursor-pointer rounded-md'
                >
                  Add Todo
                </button>
              </div>              
              {
                errors.title && 
                  <p className='text-center mb-2 text-red-500'>{errors.title}</p>
              }
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default TodoModal