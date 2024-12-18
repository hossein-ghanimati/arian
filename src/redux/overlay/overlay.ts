
import { createSlice } from "@reduxjs/toolkit";
import { setIsOpen } from "../utils/utils";

const initialState = {
  isOpen: false,
}

const slice = createSlice({
  name: "overlayStatus",
  initialState,
  reducers: {
    setOverlayStatusAction: setIsOpen
  }
})

export const {
  setOverlayStatusAction
} = slice.actions

export default slice.reducer