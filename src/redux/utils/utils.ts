import { IsOpenState } from "@/types/redux/isOpenState.type"

export const setIsOpen = (
  state: IsOpenState, 
  action: {
    payload: boolean
  }
) => {
  state.isOpen = action.payload
}