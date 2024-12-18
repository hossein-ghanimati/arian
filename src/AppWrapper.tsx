
import React, { memo } from "react";

import "./styles/tailwind/output/output.css";
import AppContent from "./AppContent";
import { useSelector } from "react-redux";
import { RootStates } from "./redux/store";

const AppWrapper: React.FC = memo((): JSX.Element => {
  const themeSetting = useSelector((store: RootStates) => store.theme)
  
  return (
    <div 
      id="app-wrapper"
      className={`${themeSetting?.isDark ? "dark" : ""}`}
    >
      <AppContent/>
    </div>
  );
});

export default AppWrapper;
