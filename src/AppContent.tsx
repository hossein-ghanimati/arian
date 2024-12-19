import { memo } from "react";
import Overlay from "./components/modals/Overlay";
import Router from "./Router";
import Header from "./components/shared/header/Header";

const AppContent = memo(() => {
  return (
    <div
      id="app"
      className="font-sans overflow-x-hidden bg-zinc-100 dark:bg-gray-800 text-gray-700 dark:text-gray-100 font-normal text-base select-none min-h-screen"
    >
      <Overlay />
      <Header/>
      <Router />
    </div>
  );
});

export default AppContent;
