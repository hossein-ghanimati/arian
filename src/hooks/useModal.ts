import { setModalAction } from "@/redux/modal/modal"
import { setOverlayAction } from "@/redux/overlay/overlay"
import { AppDispatch } from "@/redux/store"
import { useCallback } from "react"
import { useDispatch } from "react-redux"

export const useModal = () => {
  const dispath: AppDispatch = useDispatch()

  const closeModal = useCallback(() => {
    dispath(setModalAction(false))
    dispath(setOverlayAction(false))
  },[])

  const openModal = useCallback(() => {
    dispath(setModalAction(true))
    dispath(setOverlayAction(true))
  },[])

  return {
    closeModal,
    openModal
  }
}