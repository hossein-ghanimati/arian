
import { createSlice } from "@reduxjs/toolkit";
import { setIsOpen, toggleIsOpen } from "../utils/utils";


const initialState = {
  isOpen: false,
}

const slice = createSlice({
  name: "modalStatus",
  initialState,
  reducers: {
    setModalAction: setIsOpen,
    toggleModalAction: toggleIsOpen
  }
})

export const {
  setModalAction,
  toggleModalAction
} = slice.actions

export default slice.reducer