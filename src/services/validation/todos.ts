import * as yup from "yup";

export const addTodoSchema = yup.object({
  title: yup.string().min(2).max(20).required(),
})