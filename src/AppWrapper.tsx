
import React, { memo, useContext } from "react";

import "./styles/App.css";
import { ThemeContext } from "./contexts/share/theme.context";
import AppContent from "./AppContent";

const AppWrapper: React.FC = memo((): JSX.Element => {
  const themeSetting = useContext(ThemeContext);
  
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
