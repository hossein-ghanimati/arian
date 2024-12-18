import { setModalAction } from "@/redux/modal/modal";
import { AppDispatch, RootStates } from "@/redux/store";
import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";

const Overlay = memo(() => {
  const overlaySetting = useSelector((store: RootStates) => store.overlay);
  const dispath: AppDispatch = useDispatch();
  return (
    <div
      id="overlay"
      onClick={() => dispath(
        setModalAction(false)
      )}
      className={`z-30 w-full  h-full fixed top-0 right-0 bg-opacity-30  backdrop-blur-sm bg-gray-500 ${
        overlaySetting?.isOpen ? "" : "hidden"
      }`}
    ></div>
  );
});

export default Overlay;
