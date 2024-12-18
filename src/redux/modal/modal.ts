
import { createSlice } from "@reduxjs/toolkit";
import { setIsOpen } from "../utils/utils";


const initialState = {
  isOpen: false,
}

const slice = createSlice({
  name: "modalStatus",
  initialState,
  reducers: {
    setModalStatusAction: setIsOpen
  }
})

export const {
  setModalStatusAction
} = slice.actions

export default slice.reducer