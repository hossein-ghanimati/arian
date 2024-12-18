
import { createSlice } from "@reduxjs/toolkit";
import { setIsOpen, toggleIsOpen } from "../utils/utils";

const initialState = {
  isOpen: false,
}

const slice = createSlice({
  name: "overlayStatus",
  initialState,
  reducers: {
    setOverlayAction: setIsOpen,
    toggleOverlayAction: toggleIsOpen
  }
})

export const {
  setOverlayAction,
  toggleOverlayAction
} = slice.actions

export default slice.reducer